/* =============================================================
   UI INTERACTIONS: MOUSE SPOTLIGHT, SCROLL SPY, TABS & COPY
   ============================================================= */

export function initUI(): void {
  if (typeof document === 'undefined') return;

  // ─── 1. Mouse Spotlight Tracker on Bento Cards ─────────────
  const spotlightCards = document.querySelectorAll<HTMLElement>('.spotlight-card');
  
  window.addEventListener('mousemove', (e: MouseEvent) => {
    spotlightCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // ─── 2. Scroll Spy & Sticky Navbar ─────────────────────────
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
  const sections = document.querySelectorAll<HTMLElement>('section[id]');

  function handleScroll(): void {
    if (nav) {
      if (window.scrollY > 30) nav.classList.add('stuck');
      else nav.classList.remove('stuck');
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id') || '';
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ─── 3. Interactive Project Category Filters ───────────────
  const filterBtns = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

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

  // ─── 4. One-Click Copy-to-Clipboard Email ──────────────────
  const emailButtons = document.querySelectorAll<HTMLElement>('[data-copy-email]');
  const toast = document.getElementById('copy-toast');

  emailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'mayurhpatel05@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 2500);
        }
      }).catch(() => {
        if (toast) {
          toast.classList.add('show');
          setTimeout(() => {
            toast.classList.remove('show');
          }, 2500);
        }
      });
    });
  });

  // ─── 5. Intersection Observer for Smooth Section Reveals ───
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
