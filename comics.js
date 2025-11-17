// ComicVerse Hub - Static Comic Data
const comicsData = [
  {
    id: '001',
    title: 'The Dark Knight Returns',
    publisher: 'DC Comics',
    character: 'Batman',
    genre: 'Superhero',
    price: 24.99,
    releaseDate: '2024-01-15',
    coverImage: 'https://dummyimage.com/400x600/0a0a0a/ff6b35.png&text=The+Dark+Knight+Returns',
    synopsis: 'In a dystopian future, an aging Bruce Wayne returns to crime-fighting as Batman, facing his greatest challenge yet.',
    creators: {
      writer: 'Frank Miller',
      artist: 'Frank Miller',
      colorist: 'Lynn Varley'
    },
    pages: 224,
    rating: 4.9
  },
  {
    id: '002',
    title: 'Spider-Man: No Way Home',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 19.99,
    releaseDate: '2024-02-10',
    coverImage: 'https://dummyimage.com/400x600/e62429/ffffff.png&text=Spider-Man',
    synopsis: 'Peter Parker faces the multiverse as villains from alternate realities threaten everything he holds dear.',
    creators: {
      writer: 'Stan Lee',
      artist: 'Steve Ditko',
      colorist: 'John Romita Sr.'
    },
    pages: 180,
    rating: 4.8
  },
  {
    id: '003',
    title: 'Watchmen',
    publisher: 'DC Comics',
    character: 'Multiple',
    genre: 'Superhero',
    price: 29.99,
    releaseDate: '2024-01-20',
    coverImage: 'https://dummyimage.com/400x600/ffd700/000000.png&text=Watchmen',
    synopsis: 'A deconstruction of the superhero genre, exploring complex moral questions in an alternate 1985.',
    creators: {
      writer: 'Alan Moore',
      artist: 'Dave Gibbons',
      colorist: 'John Higgins'
    },
    pages: 416,
    rating: 5.0
  },
  {
    id: '004',
    title: 'X-Men: Days of Future Past',
    publisher: 'Marvel',
    character: 'X-Men',
    genre: 'Superhero',
    price: 22.99,
    releaseDate: '2024-02-15',
    coverImage: 'https://dummyimage.com/400x600/e62429/ffffff.png&text=X-Men',
    synopsis: 'The X-Men must prevent a dystopian future by changing the past in this time-traveling epic.',
    creators: {
      writer: 'Chris Claremont',
      artist: 'John Byrne',
      colorist: 'Terry Austin'
    },
    pages: 200,
    rating: 4.7
  },
  {
    id: '005',
    title: 'The Walking Dead: Compendium One',
    publisher: 'Image Comics',
    character: 'Rick Grimes',
    genre: 'Horror',
    price: 34.99,
    releaseDate: '2024-01-05',
    coverImage: 'https://dummyimage.com/400x600/1a1a1a/ff0000.png&text=Walking+Dead',
    synopsis: 'Follow Rick Grimes and a group of survivors in a post-apocalyptic world overrun by zombies.',
    creators: {
      writer: 'Robert Kirkman',
      artist: 'Tony Moore',
      colorist: 'Charlie Adlard'
    },
    pages: 1088,
    rating: 4.6
  },
  {
    id: '006',
    title: 'Saga Volume 1',
    publisher: 'Image Comics',
    character: 'Alana & Marko',
    genre: 'Sci-Fi',
    price: 14.99,
    releaseDate: '2024-02-20',
    coverImage: 'https://dummyimage.com/400x600/1a1a2e/00d4ff.png&text=Saga',
    synopsis: 'Two soldiers from opposite sides of a galactic war fall in love and must protect their newborn daughter.',
    creators: {
      writer: 'Brian K. Vaughan',
      artist: 'Fiona Staples',
      colorist: 'Fiona Staples'
    },
    pages: 160,
    rating: 4.9
  },
  {
    id: '007',
    title: 'The Sandman: Preludes & Nocturnes',
    publisher: 'DC Comics',
    character: 'Dream',
    genre: 'Fantasy',
    price: 19.99,
    releaseDate: '2024-01-25',
    coverImage: 'https://dummyimage.com/400x600/2d1b4e/ffffff.png&text=Sandman',
    synopsis: 'The Lord of Dreams escapes from a 70-year imprisonment and must reclaim his lost objects of power.',
    creators: {
      writer: 'Neil Gaiman',
      artist: 'Sam Kieth',
      colorist: 'Mike Dringenberg'
    },
    pages: 240,
    rating: 4.8
  },
  {
    id: '008',
    title: 'Invincible: Ultimate Collection',
    publisher: 'Image Comics',
    character: 'Invincible',
    genre: 'Superhero',
    price: 39.99,
    releaseDate: '2024-02-01',
    coverImage: 'https://dummyimage.com/400x600/0066cc/ffffff.png&text=Invincible',
    synopsis: 'Mark Grayson discovers his father is the most powerful superhero on Earth, but not everything is as it seems.',
    creators: {
      writer: 'Robert Kirkman',
      artist: 'Cory Walker',
      colorist: 'Ryan Ottley'
    },
    pages: 304,
    rating: 4.7
  },
  {
    id: '009',
    title: 'Batman: Year One',
    publisher: 'DC Comics',
    character: 'Batman',
    genre: 'Superhero',
    price: 16.99,
    releaseDate: '2024-01-10',
    coverImage: 'https://dummyimage.com/400x600/0a0a0a/ff6b35.png&text=Batman+Year+One',
    synopsis: 'The definitive origin story of Batman, chronicling his first year as the Dark Knight of Gotham.',
    creators: {
      writer: 'Frank Miller',
      artist: 'David Mazzucchelli',
      colorist: 'Richmond Lewis'
    },
    pages: 144,
    rating: 4.9
  },
  {
    id: '010',
    title: 'The Amazing Spider-Man: Kraven\'s Last Hunt',
    publisher: 'Marvel',
    character: 'Spider-Man',
    genre: 'Superhero',
    price: 17.99,
    releaseDate: '2024-02-25',
    coverImage: 'https://dummyimage.com/400x600/e62429/ffffff.png&text=Spider-Man+Kraven',
    synopsis: 'Kraven the Hunter finally achieves his ultimate goal: defeating Spider-Man and taking his place.',
    creators: {
      writer: 'J.M. DeMatteis',
      artist: 'Mike Zeck',
      colorist: 'Bob McLeod'
    },
    pages: 112,
    rating: 4.8
  },
  {
    id: '011',
    title: 'Y: The Last Man',
    publisher: 'DC Comics',
    character: 'Yorick Brown',
    genre: 'Sci-Fi',
    price: 19.99,
    releaseDate: '2024-01-30',
    coverImage: 'https://dummyimage.com/400x600/2c3e50/ffffff.png&text=Y+The+Last+Man',
    synopsis: 'Yorick Brown is the last man on Earth after a mysterious plague kills every male mammal except him and his pet monkey.',
    creators: {
      writer: 'Brian K. Vaughan',
      artist: 'Pia Guerra',
      colorist: 'Jose Marzan Jr.'
    },
    pages: 192,
    rating: 4.7
  },
  {
    id: '012',
    title: 'Hellboy: Seed of Destruction',
    publisher: 'Dark Horse',
    character: 'Hellboy',
    genre: 'Horror',
    price: 18.99,
    releaseDate: '2024-02-05',
    coverImage: 'https://dummyimage.com/400x600/8b0000/ffd700.png&text=Hellboy',
    synopsis: 'Hellboy, a demon summoned to Earth as a baby, grows up to become a paranormal investigator.',
    creators: {
      writer: 'Mike Mignola',
      artist: 'Mike Mignola',
      colorist: 'John Byrne'
    },
    pages: 152,
    rating: 4.6
  },
  {
    id: '013',
    title: 'Daredevil: Born Again',
    publisher: 'Marvel',
    character: 'Daredevil',
    genre: 'Superhero',
    price: 15.99,
    releaseDate: '2024-01-15',
    coverImage: 'https://dummyimage.com/400x600/cc0000/ffffff.png&text=Daredevil',
    synopsis: 'The Kingpin systematically destroys Matt Murdock\'s life, pushing him to the brink of madness.',
    creators: {
      writer: 'Frank Miller',
      artist: 'David Mazzucchelli',
      colorist: 'Christie Scheele'
    },
    pages: 232,
    rating: 4.9
  },
  {
    id: '014',
    title: 'The Flash: Rebirth',
    publisher: 'DC Comics',
    character: 'The Flash',
    genre: 'Superhero',
    price: 21.99,
    releaseDate: '2024-02-12',
    coverImage: 'https://dummyimage.com/400x600/ff6600/ffffff.png&text=The+Flash',
    synopsis: 'Barry Allen returns from the dead and must come to terms with his legacy as the Fastest Man Alive.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Ethan Van Sciver',
      colorist: 'Brian Buccellato'
    },
    pages: 176,
    rating: 4.5
  },
  {
    id: '015',
    title: 'Deadpool: The Good, The Bad, and The Ugly',
    publisher: 'Marvel',
    character: 'Deadpool',
    genre: 'Superhero',
    price: 16.99,
    releaseDate: '2024-02-18',
    coverImage: 'https://dummyimage.com/400x600/ff0000/000000.png&text=Deadpool',
    synopsis: 'Deadpool teams up with Wolverine and Captain America to uncover a conspiracy involving his past.',
    creators: {
      writer: 'Gerry Duggan',
      artist: 'Mike Hawthorne',
      colorist: 'Val Staples'
    },
    pages: 136,
    rating: 4.4
  },
  {
    id: '016',
    title: 'Wonder Woman: The Hiketeia',
    publisher: 'DC Comics',
    character: 'Wonder Woman',
    genre: 'Superhero',
    price: 13.99,
    releaseDate: '2024-01-18',
    coverImage: 'https://dummyimage.com/400x600/0066cc/ffd700.png&text=Wonder+Woman',
    synopsis: 'Wonder Woman is bound by an ancient ritual to protect a young woman, even from Batman.',
    creators: {
      writer: 'Greg Rucka',
      artist: 'J.G. Jones',
      colorist: 'Dave Stewart'
    },
    pages: 96,
    rating: 4.6
  },
  {
    id: '017',
    title: 'The Punisher: Welcome Back, Frank',
    publisher: 'Marvel',
    character: 'The Punisher',
    genre: 'Superhero',
    price: 19.99,
    releaseDate: '2024-02-22',
    coverImage: 'https://dummyimage.com/400x600/000000/ffffff.png&text=The+Punisher',
    synopsis: 'Frank Castle returns to New York and resumes his one-man war on crime with brutal efficiency.',
    creators: {
      writer: 'Garth Ennis',
      artist: 'Steve Dillon',
      colorist: 'Jimmy Palmiotti'
    },
    pages: 168,
    rating: 4.5
  },
  {
    id: '018',
    title: 'Green Lantern: Rebirth',
    publisher: 'DC Comics',
    character: 'Green Lantern',
    genre: 'Superhero',
    price: 20.99,
    releaseDate: '2024-01-28',
    coverImage: 'https://dummyimage.com/400x600/006600/ffffff.png&text=Green+Lantern',
    synopsis: 'Hal Jordan returns from the dead to reclaim his place as the greatest Green Lantern of all time.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Ethan Van Sciver',
      colorist: 'Moose Baumann'
    },
    pages: 192,
    rating: 4.7
  },
  {
    id: '019',
    title: 'Thor: God of Thunder',
    publisher: 'Marvel',
    character: 'Thor',
    genre: 'Superhero',
    price: 18.99,
    releaseDate: '2024-02-08',
    coverImage: 'https://dummyimage.com/400x600/0066cc/ffd700.png&text=Thor',
    synopsis: 'Thor faces a god-killer who has been murdering deities across the cosmos for millennia.',
    creators: {
      writer: 'Jason Aaron',
      artist: 'Esad Ribic',
      colorist: 'Ive Svorcina'
    },
    pages: 200,
    rating: 4.8
  },
  {
    id: '020',
    title: 'Aquaman: The Trench',
    publisher: 'DC Comics',
    character: 'Aquaman',
    genre: 'Superhero',
    price: 14.99,
    releaseDate: '2024-01-22',
    coverImage: 'https://dummyimage.com/400x600/0066cc/00ffff.png&text=Aquaman',
    synopsis: 'Aquaman faces a terrifying new threat from the depths of the ocean: the Trench.',
    creators: {
      writer: 'Geoff Johns',
      artist: 'Ivan Reis',
      colorist: 'Rod Reis'
    },
    pages: 144,
    rating: 4.4
  }
];

// Helper functions to get filtered/sorted data
function getComicsByPublisher(publisher) {
  return comicsData.filter(comic => comic.publisher === publisher);
}

function getComicsByCharacter(character) {
  return comicsData.filter(comic => comic.character === character);
}

function getComicsByGenre(genre) {
  return comicsData.filter(comic => comic.genre === genre);
}

function getFeaturedComics() {
  return comicsData.slice(0, 5);
}

function getNewReleases() {
  return [...comicsData].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).slice(0, 6);
}

function getPopularComics() {
  return [...comicsData].sort((a, b) => b.rating - a.rating).slice(0, 6);
}

