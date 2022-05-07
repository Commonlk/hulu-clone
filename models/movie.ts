export default interface Movie {
  id: number;
  vote_count: number;
  title: string;
  original_name: string;
  overview: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
  poster_path: string | null;
  backdrop_path: string | null;
  adult: boolean;
}
