const API_KEY = process.env.API_KEY;

export interface Request {
  [key: string]: { title: string; url: string };
}

export const requests: Request = {
  trending: {
    title: 'Trending',
    url: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRated: {
    title: 'Top Rated',
    url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  actionMovies: {
    title: 'Action',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=28`,
  },
  comedyMovies: {
    title: 'Comedy',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=35`,
  },
  horrorMovies: {
    title: 'Horror',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=27`,
  },
  romanceMovies: {
    title: 'Romance',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=10749`,
  },
  mysteryMovies: {
    title: 'Mystery',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=9648`,
  },
  sciFiMovies: {
    title: 'Sci-Fi',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=878`,
  },
  westernMovies: {
    title: 'Western',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=37`,
  },
  fetchAnimationMovies: {
    title: 'Animation',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=16`,
  },
  fetchTVMovies: {
    title: 'TV Movies',
    url: `discover/movie?api_key=${API_KEY}&language=en-US&&with_genres=10770`,
  },
};
