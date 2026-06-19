import type { Movie } from "../types/movie";
type MovieListProps = {
  movies: Movie[];
};
function MovieList({ movies }: MovieListProps) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie["#IMDB_ID"]}>
          {movie["#TITLE"]}
          {movie["#YEAR"]}
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
