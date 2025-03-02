document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navMenu && navMenu.classList.contains('active') && !event.target.closest('.header-container')) {
      navMenu.classList.remove('active');
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
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
      }
    });
  });
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top-btn');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });
    
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Form validation
  const contactForm = document.querySelector('#contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      let isValid = true;
      const nameInput = document.querySelector('#name');
      const emailInput = document.querySelector('#email');
      const messageInput = document.querySelector('#message');
      
      // Reset previous error messages
      document.querySelectorAll('.error-message').forEach(el => el.remove());
      
      // Validate name
      if (!nameInput.value.trim()) {
        isValid = false;
        showError(nameInput, 'Please enter your name');
      }
      
      // Validate email
      if (!emailInput.value.trim()) {
        isValid = false;
        showError(emailInput, 'Please enter your email');
      } else if (!isValidEmail(emailInput.value)) {
        isValid = false;
        showError(emailInput, 'Please enter a valid email address');
      }
      
      // Validate message
      if (!messageInput.value.trim()) {
        isValid = false;
        showError(messageInput, 'Please enter your message');
      }
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }
  
  function showError(inputElement, message) {
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = 'red';
    errorElement.style.fontSize = '0.8rem';
    errorElement.style.marginTop = '5px';
    
    inputElement.parentNode.appendChild(errorElement);
    inputElement.style.borderColor = 'red';
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}); 