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
  private animationFrame: number | null = null;
  private lastTime: number | null = null;
  private observer: IntersectionObserver | null = null;
  private isVisible: boolean = false;
  private waves: { config: WaveConfig; progress: number }[];
  private images: Map<string, HTMLImageElement> = new Map();

  constructor(
    canvas: HTMLCanvasElement,
    waveConfigs: ReadonlyArray<WaveConfig>,
  ) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.waves = waveConfigs.map((config) => ({
      config,
      progress: config.delay || 0,
    }));
    this.loadImages(waveConfigs);
    this.init();
  }

  private async loadImages(waveConfigs: ReadonlyArray<WaveConfig>) {
    const uniqueImageSrcs = new Set(
      waveConfigs.map((config) => config.imageSrc).filter(Boolean),
    );
    const imagePromises = [...uniqueImageSrcs].filter(Boolean).map((src) => {
      return new Promise<[string, HTMLImageElement]>((resolve, reject) => {
        const img = new Image();
        img.src = src!;
        img.onload = () => resolve([src!, img]);
        img.onerror = reject;
      });
    });

    const loadedImages = await Promise.all(imagePromises);
    loadedImages.forEach(([src, img]) => this.images.set(src, img));
  }

  private init() {
    // Match canvas size to viewport
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // Setup intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        this.handleVisibilityChange(entry!.isIntersecting);
      },
      { threshold: 0.1 },
    );

    this.observer.observe(this.canvas);
  }

  private handleVisibilityChange(isVisible: boolean) {
    this.isVisible = isVisible;

    if (isVisible && !this.animationFrame) {
      // Start animation when becoming visible
      this.animate(performance.now());
    } else if (!isVisible && this.animationFrame) {
      // Stop animation when leaving viewport
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
      this.lastTime = null;
    }
  }

  private drawWavePath(type: "left" | "right") {
    const ctx = this.ctx;
    if (type === "right") {
      ctx.moveTo(492, 92);
      ctx.bezierCurveTo(425, -8, 243, -39, 139, 67);
      ctx.bezierCurveTo(87, 120, 56, 134, 19, 127);
      ctx.bezierCurveTo(7, 125, -4, 139, 4, 149);
      ctx.lineTo(232, 460);
      ctx.lineTo(381, 677);
      ctx.bezierCurveTo(440, 764, 563, 731, 617, 704);
      ctx.bezierCurveTo(667, 677, 776, 643, 873, 670);
      ctx.bezierCurveTo(887, 674, 905, 652, 897, 640);
      ctx.lineTo(492, 92);
    } else {
      // Mirror the right path for left waves
      ctx.scale(-1, 1);
      this.drawWavePath("right");
      ctx.scale(-1, 1);
    }
  }

  private drawWave(
    wave: { config: WaveConfig; progress: number },
    opacity: number,
    blur: boolean = false,
  ) {
    const ctx = this.ctx;
    const { x, y, scale = 1, type, imageSrc } = wave.config;

    ctx.save();
    if (blur) {
      ctx.filter = "blur(2px)";
    } else {
      ctx.filter = "none";
    }

    let ourX = x;
    if (ourX < 0) {
      ourX = this.canvas.width + x;
    }
    ctx.translate(ourX, y);
    ctx.scale(scale, scale);

    // Draw image if available
    if (imageSrc && this.images.has(imageSrc)) {
      if (type === "left") {
        ctx.scale(-1, 1);
      }
      const img = this.images.get(imageSrc)!;
      ctx.drawImage(img, 0, 0);
      if (type === "left") {
        ctx.scale(-1, 1);
      }
    }

    ctx.beginPath();
    ctx.strokeStyle = `rgba(58, 175, 255, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    this.drawWavePath(type);

    ctx.setLineDash([
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.DASH_LENGTH_PERCENT,
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.GAP_LENGTH_PERCENT,
    ]);
    ctx.lineDashOffset = -wave.progress * WAVE_CONFIG.PATH_LENGTH;

    ctx.stroke();
    ctx.restore();
  }

  private animate = (timestamp: number) => {
    if (!this.isVisible) return;

    if (!this.lastTime) this.lastTime = timestamp;
    const deltaTime = (timestamp - this.lastTime) / 1000;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw each wave
    this.waves.forEach((wave) => {
      let opacity = 1;
      if (wave.progress < 0.2) {
        opacity = wave.progress * 5;
      } else if (wave.progress > 0.8) {
        opacity = (1 - wave.progress) * 5;
      }

      this.drawWave(wave, opacity);
      this.drawWave(wave, opacity, true);

      wave.progress += deltaTime / WAVE_CONFIG.ANIMATION_SPEED;
      if (wave.progress > 1) wave.progress = 0;
    });

    this.lastTime = timestamp;
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  destroy() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.images.clear();
  }
}
