/**
 * KIBERA GIRLS SOCCER ACADEMY - MAIN JAVASCRIPT FILE
 * Handles dynamic content loading, interactivity, and form handling
 */

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Set active navigation link based on current page
 */
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Mobile hamburger menu toggle
 */
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
}

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

/**
 * Load achievements from JSON and display on page
 */
async function loadAchievements() {
    const container = document.getElementById('achievements-container');
    if (!container) return;

    try {
        const response = await fetch('data/achievements.json');
        if (!response.ok) throw new Error('Failed to load achievements');
        
        const data = await response.json();
        container.innerHTML = '';
