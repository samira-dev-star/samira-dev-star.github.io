// اسکرول نرم به سکشن‌ها
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// مشاهده کارت‌ها با انیمیشن هنگام ورود به دید
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(el => observer.observe(el));

// ---------------------------------------------------------------
// Certificates

  // Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      certCards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.platform === filter) ? 'block' : 'none';
      });
    });
  });

  // Auto-scroll
  const carousel = document.querySelector('.cert-carousel');
  let scrollInterval;
  document.querySelector('.play').addEventListener('click', () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      carousel.scrollBy({ left: 2, behavior: 'smooth' });
    }, 30);
  });
  document.querySelector('.slow').addEventListener('click', () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
      carousel.scrollBy({ left: 1, behavior: 'smooth' });
    }, 60);
  });
// ----------------------------------------------------------------------------