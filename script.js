// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        
        // You can add AJAX form submission here
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Add/remove scroll class to header
    if (scrollPosition > 100) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
    
    // Animate sections when they come into view
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition > sectionTop - window.innerHeight + 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize section animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Trigger initial animations
window.dispatchEvent(new Event('scroll'));
// Add these to your existing JavaScript

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Blog functionality
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
        if (!e.target.closest('a')) {
            const link = card.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        }
    });
});

// Social media links (replace with your actual links)
const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourhandle',
    medium: 'https://medium.com/@yourusername'
};

// Initialize social links
document.querySelectorAll('.social-links a').forEach(link => {
    const platform = link.querySelector('i').classList[1].split('-')[1];
    if (socialLinks[platform]) {
        link.href = socialLinks[platform];
    }
});
// Project Details Modals
const projectData = {
    "near-duplicate": {
      title: "Near-Duplicate Image Detection",
      description: "Analyzed perceptual hashing algorithms and deep learning techniques for identifying near-duplicate images. Evaluated robustness against transformations such as resizing, cropping, and color changes.",
      technologies: ["Python", "Deep Learning", "Computer Vision"]
    },
    "marine-detect": {
      title: "MarineDetect: Ship Identification",
      description: "CNN-based deep learning model for accurate ship identification in diverse ocean environments using satellite and aerial images with computer vision techniques.",
      technologies: ["Python", "CNN", "Computer Vision"]
    },
    "faucet-benchmarking": {
      title: "Faucet Manufacturing Benchmarking",
      description: "Compared faucet manufacturing processes between Bhiwadi (India) and Suzhou (China) plants. Analyzed productivity KPIs and workflow efficiencies.",
      technologies: ["Process Analysis", "Automation", "Optimization"]
    }
  };
  
  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = button.dataset.project;
      const project = projectData[projectId];
      
      document.getElementById('modal-title').textContent = project.title;
      document.getElementById('modal-description').textContent = project.description;
      
      const techContainer = document.getElementById('modal-technologies');
      techContainer.innerHTML = project.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
      ).join('');
      
      document.getElementById('project-modal').style.display = 'block';
    });
  });
  
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
  });
  // Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    if(anchor.getAttribute('href').startsWith('#')) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  // Project Data with Detailed Information
const projects = {
    "near-duplicate": {
        title: "Near-Duplicate Image Detection",
        description: "A comprehensive analysis of perceptual hashing algorithms compared with modern deep learning approaches for identifying near-duplicate images in large datasets. The project evaluated robustness against various image transformations including resizing (50%-150%), cropping (up to 30% of image area), color space modifications (RGB to grayscale), and JPEG compression artifacts.",
        features: [
            "Implemented pHash, dHash, and wavelet hash algorithms",
            "Developed CNN-based similarity detection model with 94.3% accuracy",
            "Created evaluation framework testing 10,000+ image pairs",
            "Achieved 30% faster processing than traditional methods",
            "Implemented GPU acceleration for deep learning model"
        ],
        technologies: ["Python", "TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
        screenshots: [
            "assets/images/projects/nd-id-1.jpg",
            "assets/images/projects/nd-id-2.jpg"
        ],
        links: [
            { text: "GitHub Repository", url: "#" },
            { text: "Research Paper", url: "#" }
        ]
    },
    "marine-detect": {
        title: "MarineDetect: Ship Identification System",
        description: "An advanced computer vision system for real-time ship identification and classification in maritime environments. The model was trained on a custom dataset of 25,000+ satellite and aerial images covering various weather conditions, times of day, and ship types (cargo, tanker, fishing, military).",
        features: [
            "Custom YOLOv5 architecture implementation",
            "Achieved 92.5% mAP on test dataset",
            "Optimized for real-time processing (18 FPS on NVIDIA T4)",
            "Integrated with GIS systems for location tracking",
            "Developed data augmentation pipeline for rare conditions"
        ],
        technologies: ["Python", "PyTorch", "OpenCV", "Docker", "AWS Sagemaker"],
        screenshots: [
            "assets/images/projects/marine-1.jpg",
            "assets/images/projects/marine-2.jpg"
        ],
        links: [
            { text: "Demo Video", url: "#" },
            { text: "Technical Documentation", url: "#" }
        ]
    },
    "faucet-benchmarking": {
        title: "Faucet Manufacturing Process Benchmarking",
        description: "A comprehensive analysis comparing manufacturing workflows between Bhiwadi (India) and Suzhou (China) production facilities. The study identified 17 key process differences and recommended 9 specific improvements that reduced production costs by 22% while maintaining quality standards.",
        features: [
            "Conducted time-motion studies at both facilities",
            "Developed digital twin simulations of production lines",
            "Identified 37% faster assembly techniques",
            "Reduced material waste by 15%",
            "Implemented IoT sensors for real-time monitoring"
        ],
        technologies: ["Process Mining", "Lean Six Sigma", "Tableau", "Python", "IoT"],
        screenshots: [
            "assets/images/projects/faucet-1.jpg",
            "assets/images/projects/faucet-2.jpg"
        ],
        links: [
            { text: "Case Study", url: "#" },
            { text: "Process Flow Charts", url: "#" }
        ]
    }
};

// Modal Functionality
document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.closest('.project-card').dataset.project;
        const project = projects[projectId];
        
        // Set modal content
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        
        // Add features
        const featuresList = document.getElementById('modal-features');
        featuresList.innerHTML = project.features.map(f => `<li>${f}</li>`).join('');
        
        // Add technologies
        const techContainer = document.getElementById('modal-technologies');
        techContainer.innerHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Add screenshots
        const screenshotsContainer = document.getElementById('modal-screenshots');
        screenshotsContainer.innerHTML = project.screenshots.map(img => 
            `<img src="${img}" alt="${project.title} screenshot">`
        ).join('');
        
        // Add links
        const linksContainer = document.getElementById('modal-links');
        linksContainer.innerHTML = project.links.map(link => 
            `<a href="${link.url}" target="_blank">${link.text}</a>`
        ).join('');
        
        // Show modal
        document.getElementById('project-modal').style.display = 'block';
    });
});

// Close modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('project-modal').style.display = 'none';
});

// Close when clicking outside modal
window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('project-modal')) {
        document.getElementById('project-modal').style.display = 'none';
    }
});
// Verify the resume file exists
fetch('assets/resume.pdf')
    .then(response => {
        if (!response.ok) {
            console.error('Resume file not found!');
        }
    })
    .catch(error => {
        console.error('Error checking resume file:', error);
    });
    // Animate skill bars when section comes into view
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-bar');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const level = bar.style.getPropertyValue('--skill-level');
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = level;
        }, 100);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.2});

observer.observe(skillsSection);

// Optional: Radar chart for soft skills visualization
if (document.getElementById('skillsRadar')) {
    const ctx = document.getElementById('skillsRadar').getContext('2d');
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Problem-Solving', 'Teamwork', 'Quick Learning'],
            datasets: [{
                label: 'Soft Skills',
                data: [70, 85, 85],
                backgroundColor: 'rgba(255, 209, 102, 0.2)',
                borderColor: 'rgba(255, 209, 102, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 209, 102, 1)'
            }]
        },
        options: {
            scale: {
                angleLines: { display: true },
                ticks: { suggestedMin: 0, suggestedMax: 100 }
            }
        }
    });
}
// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const typewriterElement = document.querySelector('.typewriter');
    const texts = JSON.parse(typewriterElement.getAttribute('data-text'));
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
        const currentText = texts[currentTextIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at end of text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            typingSpeed = 500; // Pause before typing next text
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Start the typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
    
    // Initialize particles.js if available
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }
    
    // Smooth scroll for scroll down button
    document.querySelector('.scroll-down').addEventListener('click', function() {
        window.scrollBy({
            top: window.innerHeight - 80,
            behavior: 'smooth'
        });
    });
});
// Add this to your script.js file
document.addEventListener('DOMContentLoaded', function() {
    // Typewriter effect
    const texts = ["Frontend Developer", "UI Designer", "Tech Enthusiast", "Problem Solver"];
    const typewriterElement = document.querySelector('.typewriter-text');
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeWriter() {
      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        typingSpeed = 500;
      }
      
      setTimeout(typeWriter, typingSpeed);
    }
    
    // Start the typewriter effect
    setTimeout(typeWriter, 1000);
    
    // Floating shapes animation
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach(shape => {
      const randomX = Math.random() * 20 - 10;
      const randomY = Math.random() * 20 - 10;
      shape.style.setProperty('--random-x', randomX + 'px');
      shape.style.setProperty('--random-y', randomY + 'px');
    });
  });