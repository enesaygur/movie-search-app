import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";
type MovieListProps = {
  movies: Movie[];
};
function MovieList({ movies }: MovieListProps) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie["#IMDB_ID"]} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
