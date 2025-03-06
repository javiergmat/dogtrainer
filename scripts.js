// Form submission with email functionality
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dogInfo = document.getElementById('dog-info').value;
        const service = document.getElementById('service').value;
        const preferredTime = document.getElementById('preferred-time').value;
        
        // Create a hidden form that will submit to a mail service
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('dog_info', dogInfo);
        formData.append('service', service);
        formData.append('preferred_time', preferredTime);
        
        // This would typically be a server-side endpoint that processes the email
        // For this example, we're using formsubmit.co which is a free email service
        // Replace YOUR_EMAIL_HERE with your actual email address
        fetch('https://formsubmit.co/pawsharmony@outlook.com', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your interest! Your information has been sent to our team, and we will contact you within 24 hours to schedule your consultation.');
                this.reset();
            } else {
                alert('There was an issue submitting your form. Please try again or contact us directly.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an issue submitting your form. Please try again or contact us directly.');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile navigation toggle (if needed)
    const createMobileNav = () => {
        const navbar = document.querySelector('.navbar');
        
        // Create mobile toggle button if it doesn't exist
        if (!document.querySelector('.mobile-toggle')) {
            const mobileToggle = document.createElement('button');
            mobileToggle.classList.add('mobile-toggle');
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            navbar.appendChild(mobileToggle);
            
            // Toggle mobile menu
            mobileToggle.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });
        }
    };

    // Handle responsive behavior
    const handleResponsive = () => {
        if (window.innerWidth <= 768) {
            createMobileNav();
        }
    };

    // Initialize
    handleResponsive();
    
    // Listen for window resize
    window.addEventListener('resize', handleResponsive);
});