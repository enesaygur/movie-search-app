import type { Movie } from "../types/movie";

type MovieCardProps = {
  movie: Movie;
};
function MovieCard({ movie }: MovieCardProps) {
  return (
    <div>
      <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} width={150} />
      <h3>{movie["#TITLE"]}</h3>
      <p>{movie["#YEAR"]}</p>
    </div>
  );
}

export default MovieCard;
