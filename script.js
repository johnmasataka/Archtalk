// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener for header
    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow to header on scroll
        if (scrollTop > 10) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(10, 10, 10, 0.7)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add scroll button to hero section
    const hero = document.querySelector('.hero');
    const scrollDownBtn = document.createElement('div');
    scrollDownBtn.className = 'scroll-down-btn';
    scrollDownBtn.innerHTML = '<i class="fas fa-chevron-down"></i>';
    hero.appendChild(scrollDownBtn);

    // Add scroll down functionality
    scrollDownBtn.addEventListener('click', function() {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
            window.scrollTo({
                top: aboutSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simulate image loading in placeholders
    const placeholders = document.querySelectorAll('.placeholder-image, .image-placeholder');
    const gradients = [
        'linear-gradient(135deg, #654ea3, #da98b4)',
        'linear-gradient(135deg, #ff6e7f, #bfe9ff)',
        'linear-gradient(135deg, #a8c0ff, #3f2b96)',
        'linear-gradient(135deg, #4e54c8, #8f94fb)',
        'linear-gradient(135deg, #00b09b, #96c93d)',
        'linear-gradient(135deg, #fc5c7d, #6a82fb)'
    ];

    placeholders.forEach(placeholder => {
        // Apply random gradient to each placeholder
        const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        placeholder.style.background = randomGradient;
    });

    // Add hover animations to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Add typing animation to hero headline
    const heroHeadline = document.querySelector('.hero-content h2');
    if (heroHeadline) {
        const text = heroHeadline.textContent;
        heroHeadline.textContent = '';
        
        let i = 0;
        const typingSpeed = 100; // milliseconds
        
        function typeWriter() {
            if (i < text.length) {
                heroHeadline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start typing animation after a small delay
        setTimeout(typeWriter, 500);
    }

    // Add simple modal functionality for the "Sign In" button
    const signInBtn = document.querySelector('.sign-in-btn');
    
    if (signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create modal elements
            const modalOverlay = document.createElement('div');
            modalOverlay.className = 'modal-overlay';
            
            const modalContent = document.createElement('div');
            modalContent.className = 'modal-content';
            
            modalContent.innerHTML = `
                <div class="modal-header">
                    <h2>Sign In</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="login-form">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" required>
                        </div>
                        <button type="submit" class="primary-btn">Sign In</button>
                    </form>
                    <div class="form-footer">
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </div>
                </div>
            `;
            
            modalOverlay.appendChild(modalContent);
            document.body.appendChild(modalOverlay);
            
            // Add styles for modal
            const style = document.createElement('style');
            style.textContent = `
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                
                .modal-content {
                    background: var(--card-bg);
                    border-radius: 12px;
                    max-width: 400px;
                    width: 100%;
                    padding: 2rem;
                    border: 1px solid var(--border-color);
                    transform: translateY(20px);
                    transition: transform 0.3s ease;
                }
                
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .modal-close {
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                }
                
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--border-color);
                    color: white;
                }
                
                .form-footer {
                    margin-top: 1.5rem;
                    text-align: center;
                }
                
                .form-footer a {
                    color: var(--primary-color);
                }
            `;
            
            document.head.appendChild(style);
            
            // Animate modal in
            setTimeout(() => {
                modalOverlay.style.opacity = '1';
                modalContent.style.transform = 'translateY(0)';
            }, 10);
            
            // Handle modal close
            const closeBtn = modalContent.querySelector('.modal-close');
            closeBtn.addEventListener('click', closeModal);
            
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
            
            function closeModal() {
                modalOverlay.style.opacity = '0';
                modalContent.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    document.body.removeChild(modalOverlay);
                }, 300);
            }
        });
    }

    // Language switching functionality
    let currentLang = 'en'; // Default language

    // Function to update text content based on selected language
    function updateContent(lang) {
        const langData = translations[lang];
        if (!langData) return;

        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langData[key]) {
                element.textContent = langData[key];
            }
        });

        // Update navigation
        document.querySelector('nav a[href="#"]').textContent = langData.home;
        document.querySelector('nav a[href="https://discord.gg/5gQWBTKa"]').textContent = langData.community;
        document.querySelector('nav a[href="under-construction.html?section=documentation"]').textContent = langData.documentation;
        document.querySelector('nav a[href="under-construction.html?section=help"]').textContent = langData.help;
        document.querySelector('.sign-in-btn').textContent = langData.signIn;

        // Update hero section
        document.querySelector('.hero-content h2').textContent = langData.heroTitle;
        document.querySelector('.hero-content p').textContent = langData.heroSubtitle;
        document.querySelector('.hero-buttons a:nth-child(1)').textContent = langData.playground;
        document.querySelector('.hero-buttons a:nth-child(2)').textContent = langData.viewPaper;
        document.querySelector('.hero-buttons a:nth-child(3)').textContent = langData.viewVideo;
        document.querySelector('.hero-buttons a:nth-child(4)').textContent = langData.revitVersion;

        // Update about section
        document.querySelector('.about h2').textContent = langData.aboutTitle;
        document.querySelector('.about-content p:nth-child(1)').textContent = langData.aboutText1;
        document.querySelector('.about-content p:nth-child(2)').textContent = langData.aboutText2;
        document.querySelector('.about-content p:nth-child(3)').textContent = langData.aboutText3;
        document.querySelector('.tech-title').textContent = langData.techTitle;

        // Update team section
        document.querySelector('.team h3:first-child').textContent = langData.leadManager;
        const advisorsHeading = document.querySelector('.team h3:nth-of-type(2)');
        if (advisorsHeading) {
            advisorsHeading.textContent = langData.advisors;
        }

        // Update features section
        document.querySelector('.features h2').textContent = langData.featuresTitle;
        document.querySelector('.feature-card:nth-child(1) h3').textContent = langData.feature1Title;
        document.querySelector('.feature-card:nth-child(1) p').textContent = langData.feature1Desc;
        document.querySelector('.feature-card:nth-child(2) h3').textContent = langData.feature2Title;
        document.querySelector('.feature-card:nth-child(2) p').textContent = langData.feature2Desc;
        document.querySelector('.feature-card:nth-child(3) h3').textContent = langData.feature3Title;
        document.querySelector('.feature-card:nth-child(3) p').textContent = langData.feature3Desc;
        document.querySelector('.feature-card:nth-child(4) h3').textContent = langData.feature4Title;
        document.querySelector('.feature-card:nth-child(4) p').textContent = langData.feature4Desc;

        // Update CTA section
        document.querySelector('.cta-content h2').textContent = langData.ctaTitle;
        document.querySelector('.cta-content p').textContent = langData.ctaSubtitle;
        document.querySelector('.cta-content .primary-btn').textContent = langData.getStarted;
    }

    // Add event listeners to language switcher
    const languageLinks = document.querySelectorAll('.language-dropdown a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            currentLang = lang;
            
            // Update the language button text
            const languageBtn = document.querySelector('.language-btn span');
            languageBtn.textContent = this.textContent;
            
            // Update all content
            updateContent(lang);
            
            // Store the selected language in localStorage
            localStorage.setItem('preferredLanguage', lang);
        });
    });

    // Check for saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        const languageBtn = document.querySelector('.language-btn span');
        const selectedLang = document.querySelector(`.language-dropdown a[data-lang="${savedLang}"]`);
        if (selectedLang) {
            languageBtn.textContent = selectedLang.textContent;
            updateContent(savedLang);
        }
    }

    // Set initial language based on browser preference
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) {
        const preferredChinese = browserLang.includes('TW') || browserLang.includes('HK') ? 'zh-TW' : 'zh-CN';
        const chineseLink = document.querySelector(`.language-dropdown a[data-lang="${preferredChinese}"]`);
        if (chineseLink) {
            currentLang = preferredChinese;
            const languageBtn = document.querySelector('.language-btn span');
            languageBtn.textContent = chineseLink.textContent;
            updateContent(preferredChinese);
        }
    }
}); 