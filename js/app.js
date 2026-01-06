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
// Certificates Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Reset active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Show/hide cards based on filter
    certCards.forEach(card => {
      card.style.display = (filter === 'all' || card.dataset.platform === filter) ? 'block' : 'none';
    });
  });
});

// Auto-scroll Controls
const carousel = document.querySelector('.cert-carousel');
let scrollSpeed = 0;
let isScrolling = false;

// Continuous scroll loop
function scrollLoop() {
  if (!isScrolling) return;
  carousel.scrollLeft += scrollSpeed;
  requestAnimationFrame(scrollLoop);
}

// Start scrolling with given speed
function startScroll(speed) {
  scrollSpeed = speed;
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(scrollLoop);
  }
}

// Stop scrolling
function stopScroll() {
  isScrolling = false;
  scrollSpeed = 0;
}

// Play (normal speed)
document.querySelector('.play').addEventListener('click', () => {
  startScroll(2); // scroll 2px per frame
});

// Slow Down
document.querySelector('.slow').addEventListener('click', () => {
  startScroll(1); // scroll 1px per frame
});

// Speed Up
document.querySelector('.fast').addEventListener('click', () => {
  startScroll(4); // scroll 4px per frame
});

// Optional Stop button (if you add one in HTML)
const stopBtn = document.querySelector('.stop');
if (stopBtn) {
  stopBtn.addEventListener('click', stopScroll);
}

// Also stop when user manually scrolls with mouse/touch
carousel.addEventListener('wheel', stopScroll);
carousel.addEventListener('touchstart', stopScroll);
// ----------------------------------------------------------------------------