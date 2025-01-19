// Configuration constants
const WAVE_CONFIG = {
  PATH_LENGTH: 600, // Approximate path length
  DASH_LENGTH_PERCENT: 0.1,
  GAP_LENGTH_PERCENT: 0.8,
  ANIMATION_SPEED: 10, // Seconds it takes for one full animation cycle
};

export class WaveCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private animationFrame: number | null = null;
  private progress: number = 0;
  private lastTime: number | null = null;
  private observer: IntersectionObserver | null = null;
  private isVisible: boolean = false;

  constructor(canvas: HTMLCanvasElement, offset: number = 0) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.progress = offset; // Start at the offset position
    this.init();
  }

  private init() {
    // Match canvas size to SVG viewBox
    this.canvas.width = 900;
    this.canvas.height = 734;

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

  private drawWave(opacity: number, blur: boolean = false) {
    const ctx = this.ctx;

    if (blur) {
      ctx.filter = "blur(2px)";
    } else {
      ctx.filter = "none";
    }

    ctx.beginPath();
    ctx.strokeStyle = `rgba(58, 175, 255, ${opacity})`;
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    // Convert SVG path to Canvas commands
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

    // Calculate dash pattern based on progress using config values
    ctx.setLineDash([
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.DASH_LENGTH_PERCENT,
      WAVE_CONFIG.PATH_LENGTH * WAVE_CONFIG.GAP_LENGTH_PERCENT,
    ]);
    ctx.lineDashOffset = -this.progress * WAVE_CONFIG.PATH_LENGTH;

    ctx.stroke();
  }

  private animate = (timestamp: number) => {
    if (!this.isVisible) return;

    if (!this.lastTime) this.lastTime = timestamp;

    const deltaTime = (timestamp - this.lastTime) / 1000; // Convert to seconds

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Calculate opacity based on progress
    let opacity = 1;
    if (this.progress < 0.2) {
      opacity = this.progress * 5;
    } else if (this.progress > 0.8) {
      opacity = (1 - this.progress) * 5;
    }

    // Draw regular and blurred waves
    this.drawWave(opacity);
    this.drawWave(opacity, true);

    // Update progress based on time delta for consistent speed across refresh rates
    this.progress += deltaTime / WAVE_CONFIG.ANIMATION_SPEED;
    if (this.progress > 1) this.progress = 0;

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
  }
}
