document.addEventListener('DOMContentLoaded', () => {
    // 1. Select all cards that can be toggled
    const cards = document.querySelectorAll('.toggle-card');

    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        const badge = card.querySelector('.badge');

        header.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked card
            const isActive = card.classList.toggle('active');

            // Update badge text dynamically based on state
            if (badge) {
                badge.textContent = isActive ? 'Click to Collapse' : 'Click to Expand';
            }
        });
    });

    // 2. Add Smooth Scrolling to Header Navigation Links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Scroll smoothly to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Optional: Automatically expand the card when navigated via header link
                const card = targetSection.querySelector('.card');
                if (card && !card.classList.contains('active')) {
                    card.classList.add('active');
                    const badge = card.querySelector('.badge');
                    if (badge) badge.textContent = 'Click to Collapse';
                }
            }
        });
    });
});