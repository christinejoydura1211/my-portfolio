// Smooth scrolling and active link management
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Handle navigation click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to target
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const inputs = this.querySelectorAll('input, textarea');
            const formData = {};
            
            inputs.forEach(input => {
                if (input.value.trim()) {
                    formData[input.getAttribute('placeholder')] = input.value;
                }
            });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }

    // Initialize carousels (autoplay, controls, indicators)
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const items = Array.from(carousel.querySelectorAll('.carousel-item'));
        if (!track || items.length === 0) return;

        track.style.display = 'flex';
        track.style.width = `${items.length * 100}%`;
        track.style.transition = 'transform 600ms ease';
        items.forEach(item => item.style.flex = `0 0 ${100 / items.length}%`);

        let index = 0;
        const intervalMs = parseInt(carousel.dataset.interval, 10) || 8000;
        let intervalId = null;

        const nextBtn = carousel.querySelector('.next');
        const prevBtn = carousel.querySelector('.prev');

        function goTo(i) {
            index = (i + items.length) % items.length;
            track.style.transform = `translateX(-${index * (100 / items.length)}%)`;
            updateIndicators && updateIndicators();
        }

        function next() { goTo(index + 1); }
        function prev() { goTo(index - 1); }

        if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });

        carousel.addEventListener('mouseenter', () => { clearInterval(intervalId); });
        carousel.addEventListener('mouseleave', () => { startAutoplay(); });

        // Indicators (if container exists)
        const indicatorsWrap = carousel.querySelector('.carousel-indicators');
        let updateIndicators = null;
        if (indicatorsWrap) {
            indicatorsWrap.innerHTML = '';
            const buttons = [];
            items.forEach((_, i) => {
                const b = document.createElement('button');
                b.dataset.slide = i;
                if (i === 0) b.classList.add('active');
                b.addEventListener('click', () => { goTo(i); resetAutoplay(); });
                indicatorsWrap.appendChild(b);
                buttons.push(b);
            });
            updateIndicators = () => buttons.forEach((btn, i) => btn.classList.toggle('active', i === index));
        }

        function startAutoplay() {
            clearInterval(intervalId);
            intervalId = setInterval(() => { next(); }, intervalMs);
        }

        function resetAutoplay() {
            clearInterval(intervalId);
            setTimeout(startAutoplay, 5000);
        }

        goTo(0);
        startAutoplay();
    });

});