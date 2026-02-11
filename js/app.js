// اسکرول نرم به سکشن‌ها
document.querySelectorAll('header nav a').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id.startsWith('#')) return;
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// انیمیشن هنگام ورود کارت‌ها به دید
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// اعمال به کارت‌ها
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Auto-scroll Controls برای کاروسل گواهینامه‌ها
const carousel = document.querySelector('.cert-carousel');
let scrollInterval;

function startScroll(speed, delay) {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(() => {
    carousel?.scrollBy({ left: speed, behavior: 'smooth' });
  }, delay);
}

function stopScroll() {
  clearInterval(scrollInterval);
}

document.querySelector('.play')?.addEventListener('click', () => startScroll(2, 30));
document.querySelector('.slow')?.addEventListener('click', () => startScroll(1, 60));
document.querySelector('.fast')?.addEventListener('click', () => startScroll(4, 20));

carousel?.addEventListener('mouseenter', stopScroll);
carousel?.addEventListener('mouseleave', stopScroll);

// Form submission
document.querySelector('.contact')?.addEventListener('submit', (e) => {
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = 'Wird gesendet...';
  btn.disabled = true;
});


/**
 * Certificates Loader - Dynamic loading from GitHub
 * Loads certificates from GitHub repository structure
 */
class CertificatesLoader {
  constructor() {
    this.owner = 'samira-dev-star';
    this.repo = 'samira-dev-star';
    this.branch = 'main';
    this.basePath = 'Certificate';
    this.apiBase = 'https://api.github.com/repos';
    this.rawBase = 'https://raw.githubusercontent.com';

    this.platforms = new Map();
    this.certificates = [];

    this.container = document.getElementById('certContainer');
    this.filterContainer = document.getElementById('certFilters');

    this.platformMapping = {
      'CS50': 'Harvard',
      'LINKEDIN-LEARNING': 'LinkedIn',
      'Urbino-Carlo': 'Urbino',
      'IRAN-DIGITAL': 'Iran Digital',
      'Iran-Technical-and-Vocational-Training-Organization-(TVTO)': 'TVTO',
      'intellipaat': 'Intellipaat',
      'Darsman': 'Darsman',
      'Faraders': 'Faraders',
      'Daneshjooyar': 'Daneshjooyar',
      'CAOIRI': 'CAOIRI',
      'IRCS': 'IRCS',
      'MSRT-of-Iran': 'MSRT',
      'َACECR': 'ACECR'
    };
  }

  getPlatformFromFolder(folderName) {
    return this.platformMapping[folderName] || folderName;
  }

  formatCertificateName(filename) {
    let name = filename.replace(/\.(png|jpg|jpeg|pdf)$/i, '');
    name = name.replace(/[-_]/g, ' ');
    return name.replace(/\b\w/g, l => l.toUpperCase());
  }

  async fetchDirectoryContents(path) {
    const url = `${this.apiBase}/${this.owner}/${this.repo}/contents/${path}?ref=${this.branch}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching ${path}:`, error);
      throw error;
    }
  }

  async scanForCertificates() {
    const certificates = [];

    try {
      const rootContents = await this.fetchDirectoryContents(this.basePath);

      for (const item of rootContents) {
        if (item.type === 'dir') {
          const platform = this.getPlatformFromFolder(item.name);
          this.platforms.set(item.name, platform);

          try {
            const folderContents = await this.fetchDirectoryContents(item.path);

            for (const file of folderContents) {
              if (file.type === 'file' && /\.(png|jpg|jpeg|pdf)$/i.test(file.name)) {
                certificates.push({
                  name: this.formatCertificateName(file.name),
                  platform: platform,
                  folder: item.name,
                  url: file.download_url,
                  githubUrl: file.html_url,
                  filename: file.name
                });
              }
            }
          } catch (error) {
            console.warn(`Could not load certificates from ${item.name}:`, error);
          }
        }
      }
    } catch (error) {
      console.error('Error scanning certificates:', error);
      throw error;
    }

    return certificates.sort((a, b) =>
      a.platform.localeCompare(b.platform) || a.name.localeCompare(b.name)
    );
  }

  createCertCard(cert) {
    const isPdf = cert.filename.toLowerCase().endsWith('.pdf');
    const previewContent = isPdf
      ? `<div class="pdf-preview">📄</div>`
      : `<img src="${cert.url}" alt="${cert.name}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=\\'error-preview\\'>📜</div>'">`;

    return `
            <div class="cert-card" data-platform="${cert.platform}">
                <div class="cert-preview">
                    ${previewContent}
                </div>
                <h3>${cert.name}</h3>
                <p>${cert.platform}</p>
                <a href="${cert.githubUrl}" target="_blank" class="btn tiny" data-i18n="certs.view">ansehen</a>
            </div>
        `;
  }

  createFilterButtons() {
    const uniquePlatforms = [...new Set(this.platforms.values())].sort();

    let html = `<button class="filter-btn active" data-filter="all" data-i18n="certs.filter.all">Alle Zertifikate</button>`;

    uniquePlatforms.forEach(platform => {
      html += `<button class="filter-btn" data-filter="${platform}">${platform}</button>`;
    });

    return html;
  }

  setupFilters() {
    const buttons = this.filterContainer.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        buttons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const filter = e.target.dataset.filter;
        this.filterCertificates(filter);
      });
    });
  }

  filterCertificates(platform) {
    const cards = this.container.querySelectorAll('.cert-card');

    cards.forEach(card => {
      if (platform === 'all' || card.dataset.platform === platform) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.3s ease-in';
      } else {
        card.style.display = 'none';
      }
    });
  }

  async load() {
    try {
      this.certificates = await this.scanForCertificates();

      if (this.certificates.length === 0) {
        this.container.innerHTML = '<div class="error-message">No certificates found.</div>';
        return;
      }

      this.filterContainer.innerHTML = this.createFilterButtons();
      this.container.innerHTML = this.certificates
        .map(cert => this.createCertCard(cert))
        .join('');

      this.setupFilters();

      console.log(`Loaded ${this.certificates.length} certificates from ${this.platforms.size} platforms`);

    } catch (error) {
      console.error('Error loading certificates:', error);
      this.container.innerHTML = `
                <div class="error-message">
                    Error loading certificates: ${error.message}<br>
                    <small>Please refresh the page to try again.</small>
                </div>
            `;
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const loader = new CertificatesLoader();
  loader.load();
});