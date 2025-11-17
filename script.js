// ComicVerse Hub - Shared JavaScript Utilities

// Cart Management Functions
function getCart() {
    const cartJson = localStorage.getItem('comicverse_cart');
    return cartJson ? JSON.parse(cartJson) : [];
}

function saveCart(cart) {
    localStorage.setItem('comicverse_cart', JSON.stringify(cart));
}

function addItemToCart(comicId) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === comicId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: comicId, quantity: 1 });
    }
    
    saveCart(cart);
    updateCartCount();
}

function removeItemFromCart(comicId) {
    const cart = getCart();
    const filteredCart = cart.filter(item => item.id !== comicId);
    saveCart(filteredCart);
    updateCartCount();
}

function clearCart() {
    localStorage.removeItem('comicverse_cart');
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(el => {
        if (el) el.textContent = totalItems;
    });
}

// Comic Card Creation
function createComicCard(comic) {
    return `
        <div class="comic-card">
            <a href="comic-detail.html?id=${comic.id}">
                <div class="comic-card-image">
                    <img src="${comic.coverImage}" alt="${comic.title}" loading="lazy">
                    <div class="comic-card-overlay">
                        <span class="comic-price">$${comic.price.toFixed(2)}</span>
                    </div>
                </div>
                <div class="comic-card-info">
                    <span class="comic-card-publisher">${comic.publisher}</span>
                    <h3 class="comic-card-title">${comic.title}</h3>
                    <div class="comic-card-meta">
                        <span class="comic-rating-small">⭐ ${comic.rating}</span>
                        <span class="comic-genre">${comic.genre}</span>
                    </div>
                </div>
            </a>
        </div>
    `;
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

