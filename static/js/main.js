/**
 * LovedOneHomeCare - Main JavaScript
 * Handles interactive elements and enhances HTMX functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
                
                // Update URL without page reload
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // Active navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    
    function highlightNavOnScroll() {
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // Form validation enhancement
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // HTMX will handle the form submission
            // This is just for additional client-side validation if needed
            const formElements = contactForm.elements;
            let isValid = true;
            
            for (let i = 0; i < formElements.length; i++) {
                const element = formElements[i];
                
                if (element.hasAttribute('required') && !element.value.trim()) {
                    isValid = false;
                    element.classList.add('error');
                } else if (element.classList.contains('error')) {
                    element.classList.remove('error');
                }
            }
            
            if (!isValid) {
                e.preventDefault();
                // Display error message
                const formResponse = document.getElementById('form-response');
                if (formResponse) {
                    formResponse.innerHTML = '<div class="error-message">Please fill in all required fields.</div>';
                }
            }
        });
    }
    
    // Initialize any HTMX elements that need JavaScript enhancement
    document.body.addEventListener('htmx:afterSwap', function(event) {
        // This event fires after HTMX swaps content
        // Initialize any JavaScript for dynamically loaded content here
        
        // Example: Initialize sliders in testimonials
        if (event.detail.target.classList.contains('testimonial-slider')) {
            initTestimonialSlider();
        }
    });
    
    // Testimonial slider functionality
    function initTestimonialSlider() {
        const slider = document.querySelector('.testimonial-slider');
        if (!slider) return;
        
        const testimonials = slider.querySelectorAll('.testimonial');
        if (testimonials.length <= 1) return;
        
        let currentIndex = 0;
        
        // Show first testimonial
        testimonials[0].classList.add('active');
        
        // Create navigation dots
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'slider-dots';
        
        testimonials.forEach((_, index) => {
            const dot = document.createElement('button');
            dot.className = index === 0 ? 'dot active' : 'dot';
            dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
            
            dot.addEventListener('click', () => {
                goToTestimonial(index);
            });
            
            dotsContainer.appendChild(dot);
        });
        
        slider.appendChild(dotsContainer);
        
        // Create navigation arrows
        const prevButton = document.createElement('button');
        prevButton.className = 'slider-arrow prev';
        prevButton.innerHTML = '&larr;';
        prevButton.setAttribute('aria-label', 'Previous testimonial');
        
        const nextButton = document.createElement('button');
        nextButton.className = 'slider-arrow next';
        nextButton.innerHTML = '&rarr;';
        nextButton.setAttribute('aria-label', 'Next testimonial');
        
        prevButton.addEventListener('click', () => {
            goToTestimonial(currentIndex - 1);
        });
        
        nextButton.addEventListener('click', () => {
            goToTestimonial(currentIndex + 1);
        });
        
        slider.appendChild(prevButton);
        slider.appendChild(nextButton);
        
        // Auto-advance the slider
        let intervalId = setInterval(() => {
            goToTestimonial(currentIndex + 1);
        }, 5000);
        
        // Pause auto-advance on hover
        slider.addEventListener('mouseenter', () => {
            clearInterval(intervalId);
        });
        
        slider.addEventListener('mouseleave', () => {
            intervalId = setInterval(() => {
                goToTestimonial(currentIndex + 1);
            }, 5000);
        });
        
        function goToTestimonial(index) {
            // Handle wrapping
            if (index < 0) {
                index = testimonials.length - 1;
            } else if (index >= testimonials.length) {
                index = 0;
            }
            
            // Update active testimonial
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            testimonials[index].classList.add('active');
            
            // Update active dot
            const dots = dotsContainer.querySelectorAll('.dot');
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
            
            currentIndex = index;
        }
    }
});

// HTMX extensions and enhancements
document.addEventListener('htmx:load', function() {
    // This event fires when HTMX is fully loaded
    
    // Add custom HTMX extensions if needed
    // Example: Add a custom loading indicator
    htmx.defineExtension('loading-states', {
        onEvent: function(name, evt) {
            if (name === 'htmx:beforeRequest') {
                const target = evt.detail.target;
                target.classList.add('htmx-loading');
            }
            if (name === 'htmx:afterRequest') {
                const target = evt.detail.target;
                target.classList.remove('htmx-loading');
            }
        }
    });
}); 