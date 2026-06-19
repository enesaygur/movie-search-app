import type { Movie } from "../types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};
function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className={styles.card}>
      <img
        src={movie["#IMG_POSTER"]}
        alt={movie["#TITLE"]}
        width={150}
        className={styles.image}
      />
      <h3 className={styles.title}>{movie["#TITLE"]}</h3>
      <p className={styles.year}>{movie["#YEAR"]}</p>
    </div>
  );
}

export default MovieCard;
