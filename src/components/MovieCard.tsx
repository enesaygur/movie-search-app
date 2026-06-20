import { useNavigate } from "react-router-dom";
import type { Movie } from "../types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
};
function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/movie/${movie["#IMDB_ID"]}`)}
      style={{ cursor: "pointer" }}
    >
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
