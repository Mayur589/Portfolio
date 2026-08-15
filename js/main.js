/* =============================================================
   MAIN APPLICATION ENTRY POINT (SPARKLING BACKGROUND & UI)
   ============================================================= */
import { SparklingParticles } from './particles.js';
import { initUI } from './ui.js';

(function () {
  'use strict';

  // ─── 1. Initialize Sparkling Background Particles ──────────
  new SparklingParticles('particles-canvas');

  // ─── 2. Initialize UI (Cursor, Scroll Tracking & Reveals) ──
  initUI();

})();
