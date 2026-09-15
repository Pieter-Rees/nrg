const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let ticking = false;

function updateParallax() {
  const nodes = document.querySelectorAll<HTMLElement>(".parallaxImg");

  if (reducedMotion.matches) {
    for (const node of nodes) {
      node.style.transform = "";
    }
    return;
  }

  const viewHeight = window.innerHeight;

  for (const node of nodes) {
    const frame = node.parentElement;
    if (!frame) continue;

    const rect = frame.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > viewHeight) continue;

    const progress = (rect.top + rect.height / 2 - viewHeight / 2) / viewHeight;
    node.style.transform = `translate3d(0, ${progress * -40}px, 0) scale(1.08)`;
  }
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  window.requestAnimationFrame(() => {
    updateParallax();
    ticking = false;
  });
}

function bindParallax() {
  updateParallax();
}

document.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
document.addEventListener("astro:page-load", bindParallax);
bindParallax();
