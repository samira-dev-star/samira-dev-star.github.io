// js/translation-index.js - Complete Bilingual Implementation

const translations = {
    de: {
        // Navigation
        nav: {
            home: "Start",
            animations: "Animationen",
            projects: "Projekte",
            about: "Über mich",
            work: "Berufserfahrung",
            certs: "Zertifikate",
            ielts: "IELTS",
            contact: "Kontakt",
            lang: "🌐 EN"
        },

        // Hero Section
        hero: {
            title: "Visuelle Erlebnisse & sauberes Coding",
            subtitle: "Kombination aus Kreativität in Animation und Kompetenz in Softwareentwicklung.",
            cta: {
                projects: "Projekte ansehen",
                animations: "Animationen ansehen",
                github: "GitHub Profil"
            }
        },

        // Animations Section
        animations: {
            title: "Animationen",
            subtitle: "Motion Graphics, Webanimationen und leichte Interaktionen.",
            card1: {
                title: "MotorGirl-Animation",
                description: "Ich habe diese Animation mit der BlenderApp erstellt.",
                tag1: "Design",
                tag2: "Animation"
            },
            card2: {
                title: "Abstract Art",
                description: "In diesem Video habe ich dieses animierte Mädchen zum Testen erstellt.",
                tag1: "Motion",
                tag2: "Kunst"
            },
            card3: {
                title: "Interaktives Design",
                description: "In diesem Video läuft dieses animierte Mädchen.",
                tag1: "BlenderApp",
                tag2: "Interaktion"
            },
            more: "Mehr anzeigen"
        },

        // Projects Section
        projects: {
            title: "Programmierungsprojekte",
            subtitle: "Praktische Beispiele mit Demo-Links und Code.",
            card1: {
                title: "TB Chest X-Ray Classifier",
                description: "Deep-Learning-Modell zur Erkennung von Tuberkulose mit 99.51% Genauigkeit."
            },
            card2: {
                title: "Royal Clinic Project",
                description: "Django-Webanwendung zur Verwaltung einer Luxusklinik."
            },
            card3: {
                title: "The Magic Wish",
                description: "Ein interaktives Scratch-Spiel mit kreativer Story."
            },
            card4: {
                title: "Library Manager",
                description: "Ein Kommandozeilen-Tool zur Verwaltung von Bibliotheksressourcen."
            },
            card5: {
                title: "Real-Time Notification",
                description: "Benachrichtigungssystem mit Python zur Echtzeit-Kommunikation."
            },
            card6: {
                title: "Django Online Shop",
                description: "E-Commerce-Plattform mit Admin-Panel und responsivem Design."
            },
            view: "Projekt anzeigen",
            more: "Weitere Projekte"
        },

        // About Section
        about: {
            title: "Über mich",
            subtitle: "Full-Stack Developer · 3D Animator",
            main_text: `Ich bin <strong>Samira Mashti Zadeh</strong>, eine leidenschaftliche Entwicklerin mit Fokus auf <span class="highlight">Full-Stack Entwicklung</span> und <span class="highlight">immersive 3D-Erlebnisse</span>.`,
            secondary_text: `Meine Reise begann mit der Automatisierung komplexer Prozesse und führte zur Entwicklung von <strong>Scalable Web Applications</strong> und interaktiven 3D-Erfahrungen.`,
            education_title: "Universitäre Ausbildung",
            education: {
                high_school: {
                    degree: "High School Diploma (Science)",
                    institution: "Rezvan High School",
                    status: "Abgeschlossen",
                    date: "2014"
                },
                pre_university: {
                    degree: "Pre-University Program",
                    institution: "Shahid Torki School",
                    status: "Abgeschlossen",
                    date: "2015"
                },
                bachelor: {
                    degree: "B.A. in Translation Studies",
                    institution: "Jihad University",
                    status: "Abgeschlossen",
                    date: "2020"
                },
                master: {
                    degree: "M.A. in North American Studies",
                    institution: "University of Marburg",
                    status: "In Bearbeitung",
                    date: "2025 - Heute"
                }
            },
            skills_title: "Schlüsselkompetenzen"
        },

        // IELTS Section - NEW
        ielts: {
            title: "IELTS Akademisch",
            subtitle: "Gesamtergebnis Band 7.0",
            view: "Zertifikat anzeigen",
            listening: "Hören",
            reading: "Lesen",
            writing: "Schreiben",
            speaking: "Sprechen",
            test_date: "Testdatum:",
            test_center: "Testzentrum:",
            candidate_id: "Kandidaten-ID:",
            verify_note: "Verifiziert vom British Council • Gültig für 2 Jahre"
        },

        // Certificates Section
        certs: {
            title: "Zertifikate & Nachweise",
            subtitle: "Offizielle Zertifikate, Kurse und Erfolge aus verschiedenen Plattformen.",
            filter: {
                all: "Alle Zertifikate",
                harvard: "Harvard",
                linkedin: "LinkedIn",
                intellipaat: "Intellipaat",
                tvto: "TVTO",
                urbino: "Urbino",
                irandigital: "Iran Digital"
            },
            controls: {
                play: "Play",
                slow: "Langsamer",
                fast: "Schneller",
                view_all: "Alle Zertifikate auf GitHub →"
            },
            loading: "Zertifikate werden geladen..."
        },

        // Contact Section
        contact: {
            title: "Kontakt",
            subtitle: "Schreib mir für Zusammenarbeit oder Austausch.",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "E-Mail",
            phone: "Mobil",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },

        // Footer
        footer: {
            text: "© Samira Mashti Zadeh — Portfolio. Mit Liebe zum Detail erstellt."
        },

        // Meta
        meta: {
            description: "Animationen, Programmierprojekte und professionelle Zertifikate von Samira Mashti Zadeh."
        }
    },

    en: {
        // Navigation
        nav: {
            home: "Home",
            animations: "Animations",
            projects: "Projects",
            about: "About",
            work: "Work Experience",
            certs: "Certificates",
            ielts: "IELTS",
            contact: "Contact",
            lang: "🌐 DE"
        },

        // Hero Section
        hero: {
            title: "Visual Experiences & Clean Coding",
            subtitle: "Combining creativity in animation with excellence in software development.",
            cta: {
                projects: "View Projects",
                animations: "View Animations",
                github: "GitHub Profile"
            }
        },

        // Animations Section
        animations: {
            title: "Animations",
            subtitle: "Motion graphics, web animations and interactive experiences.",
            card1: {
                title: "MotorGirl Animation",
                description: "I created this animation using BlenderApp.",
                tag1: "Design",
                tag2: "Animation"
            },
            card2: {
                title: "Abstract Art",
                description: "In this video, I created this animated character for testing purposes.",
                tag1: "Motion",
                tag2: "Art"
            },
            card3: {
                title: "Interactive Design",
                description: "In this video, the animated character is running.",
                tag1: "BlenderApp",
                tag2: "Interaction"
            },
            more: "Show More"
        },

        // Projects Section
        projects: {
            title: "Programming Projects",
            subtitle: "Hands-on examples with demo links and source code.",
            card1: {
                title: "TB Chest X-Ray Classifier",
                description: "Deep learning model for detecting Tuberculosis with 99.51% accuracy."
            },
            card2: {
                title: "Royal Clinic Project",
                description: "Django web application for managing a luxury clinic."
            },
            card3: {
                title: "The Magic Wish",
                description: "An interactive Scratch game with creative storytelling."
            },
            card4: {
                title: "Library Manager",
                description: "A command-line tool for managing library resources."
            },
            card5: {
                title: "Real-Time Notification",
                description: "Python notification system for real-time communication."
            },
            card6: {
                title: "Django Online Shop",
                description: "E-commerce platform with admin panel and responsive design."
            },
            view: "View Project",
            more: "More Projects"
        },

        // About Section
        about: {
            title: "About Me",
            subtitle: "Full-Stack Developer · 3D Animator",
            main_text: `I am <strong>Samira Mashti Zadeh</strong>, an animator, web and software developer, and singer who believes <span class="highlight">Full-Stack Development</span> and <span class="highlight">creativity has no boundaries.</span>.`,
            secondary_text: `🎨 Animation <br>
            Animation is where stories come alive for me. By blending traditional and digital techniques, I create characters and worlds that feel truly alive — full of emotion, movement, and personality.<br>
            💻 Development
            I see coding as an art form. On GitHub, you'll find projects that reflect my passion for solving complex problems and building practical, creative solutions. From web development to innovative tools, I'm always learning, experimenting, and pushing my technical skills further.
            🎵 Music
            Singing is more than a hobby — it's how I connect deeply with emotions and storytelling. I use my voice as an instrument to create feeling and craft memorable moments.
            🌍 Multilingual
            Languages are windows to different cultures and perspectives. I'm fluent in English, German, and Arabic — a skill that helps me collaborate on international projects and connect with diverse audiences worldwide.

                "Art and technology are two sides of the same coin — and I live at their intersection."`,
            education_title: "University Education",
            education: {
                high_school: {
                    degree: "High School Diploma (Science)",
                    institution: "Rezvan High School",
                    status: "Completed",
                    date: "2014"
                },
                pre_university: {
                    degree: "Pre-University Program",
                    institution: "Shahid Torki School",
                    status: "Completed",
                    date: "2015"
                },
                bachelor: {
                    degree: "B.A. in Translation Studies",
                    institution: "Jihad University",
                    status: "Completed",
                    date: "2020"
                },
                master: {
                    degree: "M.A. in North American Studies",
                    institution: "University of Marburg",
                    status: "In Progress",
                    date: "2025 - Present"
                }
            },
            skills_title: "Key Skills"
        },

        // IELTS Section - NEW
        ielts: {
            title: "IELTS Academic",
            subtitle: "Overall Band 7.0",
            view: "View Certificate",
            listening: "Listening",
            reading: "Reading",
            writing: "Writing",
            speaking: "Speaking",
            test_date: "Test Date:",
            test_center: "Test Centre:",
            candidate_id: "Candidate ID:",
            verify_note: "Verified by British Council • Valid for 2 years"
        },

        // Certificates Section
        certs: {
            title: "Certificates & Credentials",
            subtitle: "Official certificates, courses and achievements from various platforms.",
            filter: {
                all: "All Certificates",
                harvard: "Harvard",
                linkedin: "LinkedIn",
                intellipaat: "Intellipaat",
                tvto: "TVTO",
                urbino: "Urbino",
                irandigital: "Iran Digital"
            },
            controls: {
                play: "Play",
                slow: "Slow Down",
                fast: "Speed Up",
                view_all: "All Certificates on GitHub →"
            },
            loading: "Loading certificates..."
        },

        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "Reach out for collaboration or just to say hello.",
            github: "GitHub",
            linkedin: "LinkedIn",
            email: "Email",
            phone: "Mobile",
            whatsapp: "WhatsApp",
            telegram: "Telegram"
        },

        // Footer
        footer: {
            text: "© Samira Mashti Zadeh — Portfolio. Created with love for detail."
        },

        // Meta
        meta: {
            description: "Animations, programming projects and professional certificates by Samira Mashti Zadeh."
        }
    }
};

// Enhanced I18n Manager with dynamic content support
class I18nManager {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.observers = [];
        console.log('[i18n] Initializing with language:', this.currentLang);
        this.init();
    }

    getInitialLanguage() {
        // Check saved preference
        const savedLang = localStorage.getItem('portfolio-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }

        // Check browser language
        const browserLang = navigator.language?.split('-')[0];
        if (browserLang === 'de' || browserLang === 'en') {
            return browserLang;
        }

        // Default to German
        return 'de';
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
        this.setupDynamicContentObserver();
        console.log('[i18n] Manager initialized successfully');
    }

    setupEventListeners() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
            });
        }

        // Handle nav links that might need language-specific routing
        document.querySelectorAll('nav a[href=""]').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.querySelector('#langBtn')) {
                    e.preventDefault();
                }
            });
        });
    }

    setupDynamicContentObserver() {
        // Watch for dynamically added content (certificates, etc.)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    this.translateDynamicElements(mutation.addedNodes);
                }
            });
        });

        const certContainer = document.getElementById('certContainer');
        if (certContainer) {
            observer.observe(certContainer, { childList: true, subtree: true });
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'de' ? 'en' : 'de';
        console.log(`[i18n] Switching from ${this.currentLang} to ${newLang}`);

        this.currentLang = newLang;
        this.applyLanguage();
        this.savePreference();

        // Dispatch custom event for other scripts
        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: newLang }
        }));
    }

    savePreference() {
        localStorage.setItem('portfolio-language', this.currentLang);
        document.documentElement.setAttribute('data-lang', this.currentLang);
    }

    applyLanguage() {
        // Update HTML attributes
        document.documentElement.lang = this.currentLang;
        document.documentElement.setAttribute('data-lang', this.currentLang);

        // Update language button
        this.updateLangButton();

        // Apply all translations
        this.translateStaticElements();
        this.translateEducationSection();
        this.translateMetaTags();
    }

    updateLangButton() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            const btnText = this.currentLang === 'de' ? '🌐 EN' : '🌐 DE';
            langBtn.textContent = btnText;
            langBtn.setAttribute('data-lang', this.currentLang === 'de' ? 'en' : 'de');
        }
    }

    translateStaticElements() {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach((element) => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(key);

            if (translation !== undefined) {
                this.applyTranslationToElement(element, translation);
            }
        });
    }

    translateDynamicElements(nodes) {
        nodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                const elements = node.querySelectorAll ?
                    node.querySelectorAll('[data-i18n]') : [];

                elements.forEach((element) => {
                    const key = element.getAttribute('data-i18n');
                    const translation = this.getNestedTranslation(key);
                    if (translation !== undefined) {
                        this.applyTranslationToElement(element, translation);
                    }
                });
            }
        });
    }

    translateEducationSection() {
        const t = translations[this.currentLang].about.education;

        // Update education cards if they exist
        const educationCards = document.querySelectorAll('.education-card');
        if (educationCards.length >= 4) {
            const keys = ['high_school', 'pre_university', 'bachelor', 'master'];

            educationCards.forEach((card, index) => {
                if (keys[index] && t[keys[index]]) {
                    const data = t[keys[index]];
                    const degreeEl = card.querySelector('.education-degree');
                    const statusEl = card.querySelector('.education-status');

                    if (degreeEl) degreeEl.textContent = data.degree;
                    if (statusEl) statusEl.textContent = data.status;
                }
            });
        }

        // Update section titles
        const eduTitle = document.querySelector('.education-title');
        if (eduTitle) {
            eduTitle.textContent = translations[this.currentLang].about.education_title;
        }

        const skillsTitle = document.querySelector('.skills-title');
        if (skillsTitle) {
            skillsTitle.textContent = translations[this.currentLang].about.skills_title;
        }
    }

    translateMetaTags() {
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = translations[this.currentLang].meta.description;
        }

        // Update title if needed
        const titleMap = {
            de: 'Samira Mashti Zadeh',
            en: 'Samira Mashti Zadeh'
        };
        document.title = titleMap[this.currentLang];
    }

    applyTranslationToElement(element, translation) {
        // Handle different element types
        if (element.tagName === 'INPUT') {
            if (element.type === 'submit' || element.type === 'button') {
                element.value = translation;
            } else {
                element.placeholder = translation;
            }
        } else if (element.tagName === 'IMG') {
            element.alt = translation;
        } else if (element.tagName === 'META') {
            element.content = translation;
        } else {
            // Support HTML content in translations
            element.innerHTML = translation;
        }
    }

    getNestedTranslation(key) {
        const keys = key.split('.');
        let current = translations[this.currentLang];

        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                console.warn(`[i18n] Translation key not found: ${key}`);
                return undefined;
            }
        }

        return current;
    }

    // Public API for other scripts
    getCurrentLanguage() {
        return this.currentLang;
    }

    translateKey(key) {
        return this.getNestedTranslation(key);
    }

    formatDate(dateStr) {
        // Format dates according to locale
        if (this.currentLang === 'de') {
            return dateStr.replace('Present', 'Heute').replace('present', 'heute');
        }
        return dateStr;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18nManager();
    window.i18nManager = i18n;

    console.log(`[i18n] ✅ Portfolio ready in ${i18n.currentLang.toUpperCase()}`);
});

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, I18nManager };
}