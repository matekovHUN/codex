/* ============================================
   KICSI CSÁNGÓ MAGYAR KONYHA - SCRIPT.JS
   Interaktív funkciók: navigáció, foglalás, animációk
   ============================================ */

// ============================================
// SMOOTH SCROLL & NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SCROLL TO BOOKING FUNCTION
// ============================================

function scrollToBooking() {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
        bookingSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // Focus on first input
        const firstInput = bookingSection.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 500);
        }
    }
}

// ============================================
// FORM HANDLING
// ============================================

function handleBooking(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;
    
    // Validate required fields
    if (!name || !phone || !date || !time || !guests) {
        alert('Kérjük, töltse ki az összes kötelező mezőt!');
        return;
    }
    
    // Format message
    const formattedDate = new Date(date).toLocaleDateString('hu-HU');
    const bookingMessage = encodeURIComponent(
        `Szia!\n\nAz alábbi foglalást szeretnék megerősíteni:\n\n` +
        `Név: ${name}\n` +
        `Telefonszám: ${phone}\n` +
        `Dátum: ${formattedDate}\n` +
        `Időpont: ${time}\n` +
        `Vendégek száma: ${guests}\n` +
        `${message ? `Megjegyzés: ${message}\n` : ''}` +
        `\nKöszönöm!`
    );
    
    // Option 1: Open WhatsApp (if available) - commented out for demo
    // const whatsappNumber = '36307243676'; // +36 30 724 3676
    // window.open(`https://wa.me/${whatsappNumber}?text=${bookingMessage}`);
    
    // Option 2: Show success message and reset form
    showBookingSuccess(name, formattedDate, time);
    
    // Reset form
    document.querySelector('.booking-form').reset();
}

function showBookingSuccess(name, date, time) {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'booking-success';
    successDiv.innerHTML = `
        <div class="success-content">
            <h4>✓ Foglalás rögzítve!</h4>
            <p>Köszönjük, <strong>${name}</strong>!</p>
            <p>Foglalása: <strong>${date}</strong> - <strong>${time}</strong></p>
            <p>Hamarosan telefonos megerősítést fogunk küldeni.</p>
            <p class="phone-info">Vagy hívjon minket: <a href="tel:+36307243676"><strong>+36 30 724 3676</strong></a></p>
        </div>
    `;
    
    // Insert after form
    const bookingSection = document.getElementById('booking');
    const existingSuccess = bookingSection.querySelector('.booking-success');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    bookingSection.appendChild(successDiv);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        successDiv.classList.add('fade-out');
        setTimeout(() => successDiv.remove(), 300);
    }, 5000);
}

// ============================================
// DATE INPUT - SET MINIMUM DATE TO TODAY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// ============================================
// INTERSECTION OBSERVER - FADE IN ON SCROLL
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe menu cards and gallery cards
document.querySelectorAll('.menu-category, .gallery-card, .contact-card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ============================================
// MOBILE MENU TOGGLE (if needed in future)
// ============================================

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// ============================================
// PHONE NUMBER FORMATTING
// ============================================

function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + ' ' + value.slice(3);
        } else if (value.length <= 9) {
            value = value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6);
        } else {
            value = value.slice(0, 2) + ' ' + value.slice(2, 5) + ' ' + value.slice(5, 8) + ' ' + value.slice(8, 11);
        }
    }
    
    input.value = value;
}

// Apply phone formatting to phone input
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
}

// ============================================
// ANALYTICS PLACEHOLDER
// ============================================

function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Here you could send data to Google Analytics or other tracking service
}

// Track button clicks
document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('cta_click', { button: this.textContent });
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🍲 Kicsi Csángó Magyar Konyha 🍲', 'color: #8B0000; font-size: 20px; font-weight: bold;');
console.log('%cDemo weboldal értékesítési bemutatóhoz', 'color: #666; font-size: 14px;');
console.log('%cAz adatok és árak demo jellegűek. Személyre szabás szükséges!', 'color: #FFC107; font-size: 12px;');
