import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";
type MovieListProps = {
  movies: Movie[];
};
function MovieList({ movies }: MovieListProps) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCard
          key={movie["#IMDB_ID"]}
          movie={movie}

        />
      ))}
    </div>
  );
}

export default MovieList;
