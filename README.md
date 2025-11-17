# ComicVerse Hub - Dynamic Online Comic Store

A modern, interactive static website simulating an online comic book store with a dark theme and advanced animations.

## Features

### 🏠 Homepage (index.html)
- **Hero Carousel**: Auto-advancing carousel showcasing featured comics
- **New Releases**: Dynamically loaded latest comic releases
- **Popular Series**: Top-rated comics displayed in a grid
- **Publisher Spotlights**: Quick access to Marvel, DC Comics, and Image Comics

### 🔍 Browse Page (browse.html)
- **Full Catalog**: View all 20 comics in a responsive grid
- **Advanced Filtering**: Filter by Publisher, Character, or Genre
- **Smart Sorting**: Sort by Price, Title, or Release Date
- **Real-time Updates**: Instant results as you change filters

### 📖 Comic Detail Page (comic-detail.html)
- **Dynamic Content**: Loads comic details based on URL parameter
- **Zoom Effect**: Hover over cover image for zoom effect
- **Complete Information**: Synopsis, creators, pricing, and metadata
- **Add to Cart**: One-click add to shopping cart

### 🛒 Shopping Cart (cart.html)
- **Persistent Storage**: Cart saved in localStorage
- **Quantity Management**: Increase/decrease item quantities
- **Real-time Total**: Automatic price calculation
- **Checkout Simulation**: Modal confirmation on checkout

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Dark theme with advanced animations and transitions
- **JavaScript (ES6+)**: Modern JavaScript with no frameworks
- **localStorage**: Client-side cart persistence

## File Structure

```
WebTech-PRoject/
├── index.html          # Homepage
├── browse.html         # Browse all comics
├── comic-detail.html   # Individual comic details
├── cart.html           # Shopping cart
├── comics.js           # Static comic data (20 comics)
├── script.js           # Shared JavaScript utilities
├── styles.css          # Dark theme stylesheet
└── README.md           # This file
```

## How to Use

1. **Open the Website**: Simply open `index.html` in a web browser
2. **Browse Comics**: Click "Browse" to see all comics with filtering options
3. **View Details**: Click on any comic card to see full details
4. **Add to Cart**: Click "Add to Cart" on any comic detail page
5. **Checkout**: Go to cart, review items, and click "Checkout"

## Features Highlights

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Dark theme with comic book aesthetic
- ✅ Smooth animations and transitions
- ✅ No backend required - fully static
- ✅ Works offline (after initial load)
- ✅ GitHub Pages ready

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- All comic images use placeholder URLs from Unsplash
- Cart data persists in browser localStorage
- No actual purchases are made (simulation only)
- All data is static and hardcoded in `comics.js`

## Customization

To add more comics, edit the `comicsData` array in `comics.js`. Each comic needs:
- `id`: Unique identifier
- `title`: Comic title
- `publisher`: Publisher name
- `character`: Main character
- `genre`: Comic genre
- `price`: Price in USD
- `releaseDate`: Date in YYYY-MM-DD format
- `coverImage`: Image URL
- `synopsis`: Description
- `creators`: Object with writer, artist, colorist
- `pages`: Number of pages
- `rating`: Rating (0-5)

Enjoy exploring ComicVerse Hub! 🚀

