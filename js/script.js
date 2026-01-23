/* HAMBURGER TOGGLE LOGIC */
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    // Using classList to trigger the CSS 'right: 0' animation
    menu.classList.toggle('open');
}

function showSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    
    // Ensure the mobile menu closes after a selection is made
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('open');
    
    window.scrollTo(0, 0);
}

function filterProducts(cat) {
    showSection('products');
    document.querySelectorAll('.product-slot').forEach(s => {
        s.style.display = (cat === 'All' || s.getAttribute('data-category') === cat) ? 'flex' : 'none';
    });
}

function openLightbox(el) {
    document.getElementById('lightbox-img').src = el.querySelector('img').src;
    document.getElementById('lightbox').style.display = 'flex';
}

function openQuotationForm() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSditAA0eRsH5pGUHZRrhcdEgEZ-xxLtiPxjh9hVh6xQmf9U6Q/viewform', '_blank');
}

function showMerchCategory(categoryId) {
    // Hide the main menu
    document.getElementById('merch-main-menu').style.display = 'none';
    
    // Hide all sub-categories first (to be safe)
    const subs = document.getElementsByClassName('merch-sub-category');
    for (let i = 0; i < subs.length; i++) {
        subs[i].style.display = 'none';
    }
    
    // Show the selected one
    document.getElementById('cat-' + categoryId).style.display = 'block';
    
    // Scroll to top of section
    document.getElementById('merchandise').scrollIntoView({ behavior: 'smooth' });
}

function backToMerchMain() {
    // Hide all sub-categories
    const subs = document.getElementsByClassName('merch-sub-category');
    for (let i = 0; i < subs.length; i++) {
        subs[i].style.display = 'none';
    }
    
    // Show the main menu
    document.getElementById('merch-main-menu').style.display = 'grid';
}

/* HERO SLIDER LOGIC */
let slideIdx = 0;
const slides = document.querySelectorAll('.slide');
if (slides.length > 0) {
    setInterval(() => {
        slides[slideIdx].classList.remove('active');
        slideIdx = (slideIdx + 1) % slides.length;
        slides[slideIdx].classList.add('active');
    }, 5000);
}
