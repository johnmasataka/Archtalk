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
}); 