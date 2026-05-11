// Minimal JS for required interactions

document.addEventListener('DOMContentLoaded', () => {
  // Sticky Cart Bar
  const stickyCartBar = document.querySelector('.sticky-cart-bar');
  const mainCTA = document.querySelector('.pdp-info .btn--primary');

  if (stickyCartBar && mainCTA) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          stickyCartBar.classList.add('is-visible');
        } else {
          stickyCartBar.classList.remove('is-visible');
        }
      });
    }, { threshold: 0 });
    observer.observe(mainCTA);
  }

  // Mobile Filter Drawer Toggle
  const filterBtn = document.querySelector('.btn--secondary[style*="display: none"]'); // Adjusted to find the filter btn if it were shown
  const filterPanel = document.querySelector('.filter-panel');

  if (filterBtn && filterPanel) {
      // Simplistic toggle
      filterBtn.addEventListener('click', () => {
          if(filterPanel.style.display === 'block') {
             filterPanel.style.display = '';
          } else {
             filterPanel.style.display = 'block';
             filterPanel.style.position = 'fixed';
             filterPanel.style.top = '0';
             filterPanel.style.left = '0';
             filterPanel.style.width = '100%';
             filterPanel.style.height = '100vh';
             filterPanel.style.background = 'var(--color-surface)';
             filterPanel.style.zIndex = '1000';
             filterPanel.style.padding = 'var(--space-4)';
          }
      });
  }
});
