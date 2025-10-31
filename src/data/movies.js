// Mock movie database - simulates TMDb API response
export const moviesDatabase = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    genre: "Drama",
    runtime: 142,
    director: "Frank Darabont",
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=675&fit=crop"
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    runtime: 152,
    director: "Christopher Nolan",
    plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.",
    poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=675&fit=crop"
  },
  {
    id: 3,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    runtime: 148,
    director: "Christopher Nolan",
    plot: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=675&fit=crop"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: "Crime",
    runtime: 154,
    director: "Quentin Tarantino",
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=1200&h=675&fit=crop"
  },
  {
    id: 5,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    runtime: 142,
    director: "Robert Zemeckis",
    plot: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man with an IQ of 75.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=675&fit=crop"
  },
  {
    id: 6,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "Sci-Fi",
    runtime: 136,
    director: "Lana Wachowski, Lilly Wachowski",
    plot: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=675&fit=crop"
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    rating: 8.7,
    genre: "Crime",
    runtime: 146,
    director: "Martin Scorsese",
    plot: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his partners in crime.",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1200&h=675&fit=crop"
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    genre: "Sci-Fi",
    runtime: 169,
    director: "Christopher Nolan",
    plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200&h=675&fit=crop"
  },
  {
    id: 9,
    title: "The Godfather",
    year: 1972,
    rating: 9.2,
    genre: "Crime",
    runtime: 175,
    director: "Francis Ford Coppola",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster: "https://images.unsplash.com/photo-1574267432644-fibilex3-4c4c-87e9-aa98e5f0c3d0?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1574267432644-f4c4c87e9aa9?w=1200&h=675&fit=crop"
  },
  {
    id: 10,
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: "Drama",
    runtime: 139,
    director: "David Fincher",
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club.",
    poster: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?w=1200&h=675&fit=crop"
  },
  {
    id: 11,
    title: "Parasite",
    year: 2019,
    rating: 8.6,
    genre: "Thriller",
    runtime: 132,
    director: "Bong Joon Ho",
    plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=675&fit=crop"
  },
  {
    id: 12,
    title: "The Prestige",
    year: 2006,
    rating: 8.5,
    genre: "Mystery",
    runtime: 130,
    director: "Christopher Nolan",
    plot: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything.",
    poster: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1200&h=675&fit=crop"
  },
  {
    id: 13,
    title: "Gladiator",
    year: 2000,
    rating: 8.5,
    genre: "Action",
    runtime: 155,
    director: "Ridley Scott",
    plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
    poster: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=1200&h=675&fit=crop"
  },
  {
    id: 14,
    title: "Whiplash",
    year: 2014,
    rating: 8.5,
    genre: "Drama",
    runtime: 106,
    director: "Damien Chazelle",
    plot: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams hang in the balance.",
    poster: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&h=675&fit=crop"
  },
  {
    id: 15,
    title: "The Departed",
    year: 2006,
    rating: 8.5,
    genre: "Crime",
    runtime: 151,
    director: "Martin Scorsese",
    plot: "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=675&fit=crop"
  },
  {
    id: 16,
    title: "Arrival",
    year: 2016,
    rating: 7.9,
    genre: "Sci-Fi",
    runtime: 116,
    director: "Denis Villeneuve",
    plot: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear.",
    poster: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&h=675&fit=crop"
  },
  {
    id: 17,
    title: "Shutter Island",
    year: 2010,
    rating: 8.2,
    genre: "Mystery",
    runtime: 138,
    director: "Martin Scorsese",
    plot: "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
    poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1200&h=675&fit=crop"
  },
  {
    id: 18,
    title: "Django Unchained",
    year: 2012,
    rating: 8.4,
    genre: "Western",
    runtime: 165,
    director: "Quentin Tarantino",
    plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    poster: "https://images.unsplash.com/photo-1574267432644-f4c4c87e9aa9?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1574267432644-f4c4c87e9aa9?w=1200&h=675&fit=crop"
  },
  {
    id: 19,
    title: "Blade Runner 2049",
    year: 2017,
    rating: 8.0,
    genre: "Sci-Fi",
    runtime: 164,
    director: "Denis Villeneuve",
    plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=675&fit=crop"
  },
  {
    id: 20,
    title: "Mad Max: Fury Road",
    year: 2015,
    rating: 8.1,
    genre: "Action",
    runtime: 120,
    director: "George Miller",
    plot: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=675&fit=crop"
  }
];

// Simulate API delay
export const searchMovies = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!query || query.trim() === '') {
        resolve(moviesDatabase);
        return;
      }

      const lowerQuery = query.toLowerCase();
      const results = moviesDatabase.filter(movie =>
        movie.title.toLowerCase().includes(lowerQuery) ||
        movie.genre.toLowerCase().includes(lowerQuery) ||
        movie.director.toLowerCase().includes(lowerQuery) ||
        movie.year.toString().includes(lowerQuery)
      );

      resolve(results);
    }, 300); // Simulate network delay
  });
};

export const getMovieById = (id) => {
  return moviesDatabase.find(movie => movie.id === id);
};
