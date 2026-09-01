/* =============================================================
   SUBTLE MONOCHROME STARLIGHT PARTICLES (MINIMALIST TWINKLE)
   ============================================================= */

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  isSpark: boolean;
  color: string;
  glow: string;
  phase: number;
  twinkleSpeed: number;
  baseAlpha: number;
}

interface PaletteColor {
  color: string;
  glow: string;
}

export class SparklingParticles {
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private particles: Particle[] = [];
  private numParticles: number = 75; // Subtle, elegant stardust
  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private width: number = 0;
  private height: number = 0;

  // Clean Monochrome & Silver Palette
  private palette: PaletteColor[] = [
    { color: '255, 255, 255', glow: 'rgba(255, 255, 255, 0.45)' }, // Pure Starlight White
    { color: '244, 244, 245', glow: 'rgba(244, 244, 245, 0.35)' }, // Platinum Silver
    { color: '228, 228, 231', glow: 'rgba(228, 228, 231, 0.25)' }, // Zinc
    { color: '161, 161, 170', glow: 'rgba(161, 161, 170, 0.2)' }   // Subtle Charcoal Stardust
  ];

  constructor(canvasId: string) {
    if (typeof document === 'undefined') return;
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) return;

    this.init();
  }

  private init(): void {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Subtle, gentle mouse parallax
    window.addEventListener('mousemove', (e: MouseEvent) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 12;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 12;
    });

    this.createParticles();
    this.animate();
  }

  private resize(): void {
    if (!this.canvas || !this.ctx) return;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  private createParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      const pColor = this.palette[Math.floor(Math.random() * this.palette.length)];
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        baseX: Math.random() * this.width,
        baseY: Math.random() * this.height,
        size: 0.9 + Math.random() * 1.8,
        isSpark: Math.random() > 0.65, // 35% are delicate 4-point twinkling stars
        color: pColor.color,
        glow: pColor.glow,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.6 + Math.random() * 1.2,
        baseAlpha: 0.15 + Math.random() * 0.35
      });
    }
  }

  private drawSparkleStar(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
    alpha: number,
    color: string
  ): void {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = `rgba(${color}, ${alpha})`;
    ctx.shadowBlur = 6;
    ctx.shadowColor = `rgba(${color}, ${alpha * 0.6})`;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  private animate(): void {
    let time = 0;

    const render = () => {
      requestAnimationFrame(render);
      if (!this.ctx) return;
      time += 0.014;

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Subtle mouse parallax
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.04;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.04;

      const ctx = this.ctx;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Smooth twinkle calculation
        const sparkle = Math.sin(time * p.twinkleSpeed + p.phase);
        const alpha = Math.max(0.05, Math.min(0.85, p.baseAlpha + sparkle * 0.35));
        const currentSize = p.size * (0.9 + sparkle * 0.2);

        const renderX = p.baseX + this.mouseX * (p.size * 0.2);
        const renderY = p.baseY + this.mouseY * (p.size * 0.2);

        if (p.isSpark && alpha > 0.35) {
          // Delicate 4-point twinkling white star
          this.drawSparkleStar(ctx, renderX, renderY, 4, currentSize * 2.2, currentSize * 0.5, alpha, p.color);
        } else {
          // Subtle stardust dot
          ctx.beginPath();
          ctx.arc(renderX, renderY, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
          ctx.shadowBlur = alpha > 0.4 ? 6 : 0;
          ctx.shadowColor = `rgba(${p.color}, ${alpha * 0.5})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    };

    render();
  }
}
