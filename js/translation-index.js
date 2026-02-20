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
            subtitle: "Wo <strong>Code</strong> auf <strong>Kreativität</strong> trifft",
            main_text: "<strong>Backend-Entwickler</strong> mit <strong>3 Jahren Erfahrung</strong> in <strong>Python</strong> und <strong>Django</strong>, in <strong>Datenbankdesign</strong> und <strong>API-Entwicklung</strong>. Was mich auszeichnet, ist mein <strong>kreativer Hintergrund</strong> in <strong>3D-Animation</strong>, <strong>visuellem Design</strong> und <strong>Musik</strong>, der es mir ermöglicht, Systeme zu entwickeln, die nicht nur <strong>leistungsstark</strong>, sondern auch <strong>intuitiv</strong> und <strong>emotional ansprechend</strong> gestaltet sind.",
            secondary_text: "Ich freue mich darauf, <strong>innovativen Teams</strong> beizutreten, in denen <strong>technische Präzision</strong> auf <strong>kreatives Problemlösung</strong> trifft.",
            education_title: "Universitäre Ausbildung",
            education: {
                high_school: {
                    degree: "High School Diploma (Science)",
                    institution: "Rezvan High School",
                    year: "2014"
                },
                pre_university: {
                    degree: "Pre-University Program",
                    institution: "Shahid Torki School",
                    year: "2015"
                },
                bachelor: {
                    degree: "B.A. in Translation Studies",
                    institution: "Jihad University",
                    year: "2020"
                },
                master: {
                    degree: "M.A. in North American Studies",
                    institution: "University of Marburg",
                    year: "2025 - Heute"
                }
            },
            skills_title: "Schlüsselkompetenzen"
        },
        work: {
            title: "Berufserfahrung",
            subtitle: "Sprachlehre & Ausbildung",
            job1: {
                title: "Sprachausbildung",
                company: "Jihad Daneshghee Institut"
            },
            job2: {
                title: "Englischunterricht",
                company: "Faraz Sprachschule"
            }
        },
        // IELTS Section
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
            subtitle: "Where <strong>Code</strong> Meets <strong>Creativity</strong>",
            main_text: "<strong>Backend developer</strong> with <strong>3 years of experience</strong> in <strong>Python</strong> and <strong>Django</strong>, in <strong>database design</strong> and <strong>API development</strong>. What sets me apart is my <strong>creative background</strong> in <strong>3D animation</strong>, <strong>visual design</strong>, and <strong>music</strong>, allowing me to build systems that are not only <strong>robust</strong> but also <strong>intuitively</strong> and <strong>emotionally resonant</strong>.",
            secondary_text: "Eager to join <strong>innovative teams</strong> where <strong>technical precision</strong> meets <strong>creative problem-solving</strong>.",

            title: "Über mich",
            subtitle: "Wo <strong>Code</strong> auf <strong>Kreativität</strong> trifft",
            main_text: "<strong>Backend-Entwickler</strong> mit <strong>3 Jahren Erfahrung</strong> in <strong>Python</strong> und <strong>Django</strong>, in <strong>Datenbankdesign</strong> und <strong>API-Entwicklung</strong>. Was mich auszeichnet, ist mein <strong>kreativer Hintergrund</strong> in <strong>3D-Animation</strong>, <strong>visuellem Design</strong> und <strong>Musik</strong>, der es mir ermöglicht, Systeme zu entwickeln, die nicht nur <strong>leistungsstark</strong>, sondern auch <strong>intuitiv</strong> und <strong>emotional ansprechend</strong> gestaltet sind.",
            secondary_text: "Ich freue mich darauf, <strong>innovativen Teams</strong> beizutreten, in denen <strong>technische Präzision</strong> auf <strong>kreatives Problemlösung</strong> trifft.",

            education_title: "University Education",
            education: {
                high_school: {
                    degree: "High School Diploma (Science)",
                    institution: "Rezvan High School",
                    year: "2014"
                },
                pre_university: {
                    degree: "Pre-University Program",
                    institution: "Shahid Torki School",
                    year: "2015"
                },
                bachelor: {
                    degree: "B.A. in Translation Studies",
                    institution: "Jihad University",
                    year: "2020"
                },
                master: {
                    degree: "M.A. in North American Studies",
                    institution: "University of Marburg",
                    year: "2025 - Present"
                }
            },
            skills_title: "Key Skills"
        },
        work: {
            title: "Work Experience",
            subtitle: "Language Teaching & Training",
            job1: {
                title: "Language Training",
                company: "Jihad Daneshghee Institute"
            },
            job2: {
                title: "English Teaching",
                company: "Faraz Language School"
            }
        },
        // IELTS Section
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
        console.log('[i18n] Initializing with language:', this.currentLang);
        this.init();
    }

    getInitialLanguage() {
        const savedLang = localStorage.getItem('portfolio-language');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        const browserLang = navigator.language?.split('-')[0];
        if (browserLang === 'de' || browserLang === 'en') {
            return browserLang;
        }
        return 'de';
    }

    init() {
        this.applyLanguage();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const langBtn = document.getElementById('langBtn');
        if (langBtn) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleLanguage();
            });
        }
    }

    toggleLanguage() {
        const newLang = this.currentLang === 'de' ? 'en' : 'de';
        console.log(`[i18n] Switching from ${this.currentLang} to ${newLang}`);
        this.currentLang = newLang;
        this.applyLanguage();
        localStorage.setItem('portfolio-language', this.currentLang);
        document.documentElement.setAttribute('data-lang', this.currentLang);

        window.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: newLang }
        }));
    }

    applyLanguage() {
        document.documentElement.lang = this.currentLang;
        document.documentElement.setAttribute('data-lang', this.currentLang);
        this.updateLangButton();
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
                element.innerHTML = translation;
            }
        });
    }

    translateEducationSection() {
        const t = translations[this.currentLang].about.education;
        if (!t) return;

        // Find all education items by data-edu-key
        const eduItems = document.querySelectorAll('[data-edu-key]');
        eduItems.forEach((item) => {
            const key = item.getAttribute('data-edu-key');
            if (t[key]) {
                const degreeEl = item.querySelector('.edu-degree, h4');
                const institutionEl = item.querySelector('.edu-institution, p');
                const yearEl = item.querySelector('.edu-year, span');

                if (degreeEl) degreeEl.textContent = t[key].degree;
                if (institutionEl) institutionEl.textContent = t[key].institution;
                if (yearEl) yearEl.textContent = t[key].year;
            }
        });

        // Update section titles
        const eduTitle = document.querySelector('.education-box-title, .education-inline-title, [data-i18n="about.education_title"]');
        if (eduTitle && !eduTitle.hasAttribute('data-i18n')) {
            eduTitle.textContent = translations[this.currentLang].about.education_title;
        }

        const skillsTitle = document.querySelector('.skills-box-title, .skills-inline-title, [data-i18n="about.skills_title"]');
        if (skillsTitle && !skillsTitle.hasAttribute('data-i18n')) {
            skillsTitle.textContent = translations[this.currentLang].about.skills_title;
        }
    }

    translateMetaTags() {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = translations[this.currentLang].meta.description;
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

    getCurrentLanguage() {
        return this.currentLang;
    }

    translateKey(key) {
        return this.getNestedTranslation(key);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const i18n = new I18nManager();
    window.i18nManager = i18n;
    console.log(`[i18n] ✅ Portfolio ready in ${i18n.currentLang.toUpperCase()}`);
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, I18nManager };
}