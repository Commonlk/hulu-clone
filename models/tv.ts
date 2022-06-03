export default interface TV {
  id: number;
  vote_count: number;
  number_of_seasons: number;
  original_name: string;
  first_air_date: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
}

export interface Season {
  id: number;
  season_number: number;
  name: string;
  overview: string;
  episodes: Episode[];
}

interface Episode {
  id: number;
  episode_number: number;
  runtime: number;
  name: string;
  overview: string;
  still_path: string;
  air_date: string;
}
