/* =============================================================
   SPARKLING AMETHYST PURPLE PARTICLES (TWINKLE & GLOW)
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
  private numParticles: number = 95;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private targetMouseX: number = 0;
  private targetMouseY: number = 0;
  private width: number = 0;
  private height: number = 0;

  private palette: PaletteColor[] = [
    { color: '160, 108, 213', glow: 'rgba(160, 108, 213, 0.6)' }, // Vibrant Amethyst #a06cd5
    { color: '192, 132, 252', glow: 'rgba(192, 132, 252, 0.55)' }, // Glowing Violet #c084fc
    { color: '226, 207, 234', glow: 'rgba(226, 207, 234, 0.5)' },  // Lavender Starlight #e2cfea
    { color: '129, 140, 248', glow: 'rgba(129, 140, 248, 0.55)' }, // Electric Iris #818cf8
    { color: '98, 71, 170', glow: 'rgba(98, 71, 170, 0.45)' }     // Deep Amethyst #6247aa
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

    // Subtle mouse parallax
    window.addEventListener('mousemove', (e: MouseEvent) => {
      this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 18;
      this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 18;
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
        size: 1.1 + Math.random() * 2.4,
        isSpark: Math.random() > 0.5,
        color: pColor.color,
        glow: pColor.glow,
        phase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.9 + Math.random() * 1.8,
        baseAlpha: 0.2 + Math.random() * 0.4
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
    ctx.shadowBlur = 10;
    ctx.shadowColor = `rgba(${color}, ${alpha * 0.9})`;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  private animate(): void {
    let time = 0;

    const render = () => {
      requestAnimationFrame(render);
      if (!this.ctx) return;
      time += 0.016;

      this.ctx.clearRect(0, 0, this.width, this.height);

      // Smooth mouse parallax
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

      const ctx = this.ctx;

      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];

        // Twinkle calculation
        const sparkle = Math.sin(time * p.twinkleSpeed + p.phase);
        const alpha = Math.max(0.08, Math.min(1.0, p.baseAlpha + sparkle * 0.5));
        const currentSize = p.size * (0.85 + sparkle * 0.3);

        const renderX = p.baseX + this.mouseX * (p.size * 0.25);
        const renderY = p.baseY + this.mouseY * (p.size * 0.25);

        if (p.isSpark && alpha > 0.35) {
          // 4-point twinkling purple star
          this.drawSparkleStar(ctx, renderX, renderY, 4, currentSize * 2.6, currentSize * 0.6, alpha, p.color);
        } else {
          // Glowing purple particle
          ctx.beginPath();
          ctx.arc(renderX, renderY, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
          ctx.shadowBlur = alpha > 0.4 ? 10 : 0;
          ctx.shadowColor = `rgba(${p.color}, ${alpha * 0.85})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    };

    render();
  }
}
