import { useNavigate } from "react-router-dom";
import type { Movie } from "../types/movie";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  movie: Movie;
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};
function MovieCard({
  movie,
  favorites,
  addFavorite,
  removeFavorite,
}: MovieCardProps) {
  const navigate = useNavigate();
  const isFav = favorites.some((m) => m["#IMDB_ID"] === movie["#IMDB_ID"]);
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
      <button
        onClick={(e) => {
          e.stopPropagation();
          isFav ? removeFavorite(movie["#IMDB_ID"]) : addFavorite(movie);
        }}
      >
        {isFav ? "⭐" : "☆"}
      </button>
    </div>
  );
}

export default MovieCard;
