/* =============================================================
   UI INTERACTIONS: CURSOR, SCROLL SPY, TABS & COPY TOAST
   ============================================================= */

export function initUI(): void {
  if (typeof document === 'undefined') return;

  // ─── 1. Custom Dual-Ring Cursor ────────────────────────────
  const cursor = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');
  let cx = 0, cy = 0, rx = 0, ry = 0;

  window.addEventListener('mousemove', (e: MouseEvent) => {
    cx = e.clientX;
    cy = e.clientY;
    if (cursor) {
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
    }
  });

  (function animCursor() {
    if (cursorRing) {
      rx += (cx - rx) * 0.14;
      ry += (cy - ry) * 0.14;
      cursorRing.style.left = rx + 'px';
      cursorRing.style.top = ry + 'px';
    }
    requestAnimationFrame(animCursor);
  })();

  // ─── 2. Scroll Progress & Sticky Navbar ────────────────────
  function handleScroll(): void {
    const nav = document.getElementById('nav');
    if (nav) {
      if (window.scrollY > 40) nav.classList.add('stuck');
      else nav.classList.remove('stuck');
    }

    const sections = document.querySelectorAll<HTMLElement>('.sec');
    const railBtns = document.querySelectorAll<HTMLElement>('.rail button');
    let activeIdx = 0;
    sections.forEach((sec, idx) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45) activeIdx = idx;
    });

    railBtns.forEach((btn, idx) => {
      if (idx === activeIdx) btn.classList.add('on');
      else btn.classList.remove('on');
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── 3. Navigation Clicks ──────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-dest]').forEach((el) => {
    el.addEventListener('click', () => {
      const targetId = el.getAttribute('data-dest');
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.querySelectorAll<HTMLElement>('.rail button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ─── 4. Interactive Project Filter Tabs (UI Kit) ───────────
  const filterTabs = document.querySelectorAll<HTMLButtonElement>('.filter-tab');
  const projectCards = document.querySelectorAll<HTMLElement>('.cards-grid .card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category === filter || category.includes(filter || '')) {
          card.classList.remove('hidden-card');
        } else {
          card.classList.add('hidden-card');
        }
      });
    });
  });

  // ─── 5. One-Click Copy-to-Clipboard Email ──────────────────
  const emailLink = document.querySelector<HTMLElement>('.contact-email');
  const toast = document.getElementById('copy-toast');

  if (emailLink && toast) {
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mayurhpatel05@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      }).catch(() => {
        // Fallback
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 2500);
      });
    });
  }

  // ─── 6. Scroll Reveal Observer ─────────────────────────────
  const rvObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('rv-in');
        rvObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-rv]').forEach((el) => rvObserver.observe(el));
}
