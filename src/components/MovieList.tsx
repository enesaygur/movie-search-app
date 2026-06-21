import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
type MovieListProps = {
  movies: Movie[];
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};
function MovieList({
  movies,
  favorites,
  addFavorite,
  removeFavorite,
}: MovieListProps) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard key={movie["#IMDB_ID"]} movie={movie} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />
      ))}
    </div>
  );
}

export default MovieList;
