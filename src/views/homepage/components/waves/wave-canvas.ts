// Configuration constants
const WAVE_CONFIG = {
  PATH_LENGTH: 600,
  DASH_LENGTH_PERCENT: 0.1,
  GAP_LENGTH_PERCENT: 0.8,
  ANIMATION_SPEED: 10,
};

interface WaveConfig {
  type: "left" | "right";
  x: number;
  y: number;
  scale?: number;
  delay: number;
  imageSrc?: string;
}

export class WaveCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private background: HTMLCanvasElement;
  private backgroundCtx: CanvasRenderingContext2D;
  private animationFrame: number | null = null;
  private lastTime: number | null = null;
  private observer: IntersectionObserver | null = null;
  private isVisible: boolean = false;
  private destroyed = false;
  private waves: { config: WaveConfig; progress: number }[];
  private images: Map<string, HTMLImageElement> = new Map();
  private imagePromise: Promise<void> | null = null;
  // Keep this breakpoint aligned with the mobile rule in waves.module.scss.
  private mobileQuery = window.matchMedia("(max-width: 810px)");
  private motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  private rightPath = new Path2D(
    "M492 92C425-8 243-39 139 67C87 120 56 134 19 127C7 125-4 139 4 149L232 460L381 677C440 764 563 731 617 704C667 677 776 643 873 670C887 674 905 652 897 640L492 92",
  );
  private leftPath = new Path2D();
  private baseWidth = 1920; // Base width for scaling calculations
  private baseHeight = 1080; // Base height for scaling calculations

  constructor(
    canvas: HTMLCanvasElement,
    background: HTMLCanvasElement,
    waveConfigs: ReadonlyArray<WaveConfig>,
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.background = background;
    this.backgroundCtx = background.getContext("2d")!;
    this.leftPath.addPath(this.rightPath, new DOMMatrix([-1, 0, 0, 1, 0, 0]));
    this.waves = waveConfigs.map((config) => ({
      config,
      progress: config.delay || 0,
    }));
    this.init();
  }

  private async loadImages() {
    const uniqueImageSrcs = new Set(
      this.waves.map(({ config }) => config.imageSrc).filter(Boolean),
    );
    const imagePromises = [...uniqueImageSrcs].filter(Boolean).map((src) => {
      return new Promise<[string, HTMLImageElement]>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve([src!, img]);
        img.onerror = reject;
        img.src = src!;
      });
    });

    const loadedImages = await Promise.allSettled(imagePromises);
    if (this.destroyed) return;
    loadedImages.forEach((result) => {
      if (result.status === "fulfilled") {
        const [src, img] = result.value;
        this.images.set(src, img);
      }
    });
    if (!this.mobileQuery.matches) {
      this.drawBackground();
      this.drawWaves();
    }
  }

  private init() {
    this.handleResize();

    // Setup resize listener
    window.addEventListener("resize", this.handleResize);
    document.addEventListener("visibilitychange", this.syncPlayback);
    this.mobileQuery.addEventListener("change", this.handleResize);
    this.motionQuery.addEventListener("change", this.syncPlayback);

    // Setup intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        this.isVisible = entry!.isIntersecting;
        this.syncPlayback();
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.canvas);
  }

  private handleResize = () => {
    const width = this.mobileQuery.matches ? 0 : window.innerWidth;
    const height = this.mobileQuery.matches ? 0 : window.innerHeight;
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = this.background.width = width;
      this.canvas.height = this.background.height = height;
      if (width && height) {
        this.drawBackground();
        this.drawWaves();
      }
    }
    this.syncPlayback();
  };

  private syncPlayback = () => {
    if (this.mobileQuery.matches || !this.isVisible || document.hidden) {
      this.stopAnimation();
      return;
    }

    // Mobile never downloads or rasterizes the decoration that CSS hides.
    this.imagePromise ??= this.loadImages();
    if (this.motionQuery.matches) {
      this.stopAnimation();
      this.drawWaves();
    } else if (this.animationFrame === null) {
      this.animationFrame = requestAnimationFrame(this.animate);
    }
  };

  private stopAnimation() {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    this.lastTime = null;
  }

  private positionWave(ctx: CanvasRenderingContext2D, config: WaveConfig) {
    const globalScale = this.getScale();
    ctx.translate(
      this.getScreenCenterX() + config.x * globalScale,
      config.y * globalScale,
    );
    ctx.scale(
      (config.scale ?? 1) * globalScale,
      (config.scale ?? 1) * globalScale,
    );
  }

  private drawBackground() {
    const ctx = this.backgroundCtx;
    ctx.clearRect(0, 0, this.background.width, this.background.height);
    // The SVG outlines never change. Paint their sharp and blurred layers only
    // after an image loads or the viewport resizes, beneath the moving strokes.
    for (const { config } of this.waves) {
      const img = config.imageSrc && this.images.get(config.imageSrc);
      if (!img) continue;
      ctx.save();
      this.positionWave(ctx, config);
      if (config.type === "left") ctx.scale(-1, 1);
      ctx.drawImage(img, 0, 0);
      ctx.filter = "blur(2px)";
      ctx.drawImage(img, 0, 0);
      ctx.restore();
    }
  }

  private drawWaves() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.waves.forEach((wave) => {
      let opacity = 1;
      if (wave.progress < 0.2) {
        opacity = wave.progress * 5;
      } else if (wave.progress > 0.8) {
        opacity = (1 - wave.progress) * 5;
      }
      this.drawWave(wave, opacity);
      this.drawWave(wave, opacity, true);
    });
  }

  private getScreenCenterX(): number {
    return this.canvas.width / 2;
  }

  private getScale(): number {
    const windowRatio = window.innerWidth / window.innerHeight;
    const baseRatio = this.baseWidth / this.baseHeight;

    if (windowRatio > baseRatio) {
      return window.innerWidth / this.baseWidth;
    } else {
      return window.innerHeight / this.baseHeight;
    }
  }

  private drawWave(
    wave: { config: WaveConfig; progress: number },
    opacity: number,
    blur: boolean = false,
  ) {
    const ctx = this.ctx;
    const { type } = wave.config;

    ctx.save();
    if (blur) {
      ctx.filter = "blur(2px)";
    } else {
      ctx.filter = "none";
    }

    this.positionWave(ctx, wave.config);
    ctx.strokeStyle = `rgba(58, 175, 255, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.setLineDash([
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.DASH_LENGTH_PERCENT,
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.GAP_LENGTH_PERCENT,
    ]);
    ctx.lineDashOffset = -wave.progress * WAVE_CONFIG.PATH_LENGTH;

    ctx.stroke(type === "left" ? this.leftPath : this.rightPath);
    ctx.restore();
  }

  private animate = (timestamp: number) => {
    this.animationFrame = null;
    if (
      !this.isVisible ||
      this.mobileQuery.matches ||
      this.motionQuery.matches ||
      document.hidden
    ) {
      this.lastTime = null;
      return;
    }

    if (this.lastTime === null) this.lastTime = timestamp;
    const deltaTime = (timestamp - this.lastTime) / 1000;

    this.drawWaves();
    this.waves.forEach((wave) => {
      wave.progress += deltaTime / WAVE_CONFIG.ANIMATION_SPEED;
      if (wave.progress > 1) wave.progress = 0;
    });

    this.lastTime = timestamp;
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  destroy() {
    this.destroyed = true;
    this.stopAnimation();
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("visibilitychange", this.syncPlayback);
    this.mobileQuery.removeEventListener("change", this.handleResize);
    this.motionQuery.removeEventListener("change", this.syncPlayback);
    this.images.clear();
  }
}
