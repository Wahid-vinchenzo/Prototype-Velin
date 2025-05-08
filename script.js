document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle (from your previous setup)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Hero Slider Initialization
    const heroSlider = new Swiper('.hero-slider', {
        loop: true, // Essential for continuous auto-swiping
        autoplay: {
            delay: 4000, // Time in ms between slides (e.g., 4 seconds)
            disableOnInteraction: false, // Autoplay WILL NOT be disabled after user interactions (swipes/clicks)
            pauseOnMouseEnter: true,     // Optional: Pauses autoplay when mouse hovers over the slider
        },
        effect: 'slide', // Could be 'fade' for a different transition
        // speed: 600, // Optional: transition speed in ms

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows (uncomment if you use them in HTML)
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // Accessibility
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            paginationBulletMessage: 'Go to slide {{index}}',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
    });
});