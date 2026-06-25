import { useNavigate, useParams } from "react-router-dom";
import { getMovieById } from "../services/movieService";
import { useFavorites } from "../hooks/useFavorites";
import { useQuery } from "@tanstack/react-query";

function MovieDetail() {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: movie,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id || ""),
    enabled: !!id,
    staleTime: 1000 * 60 * 10,
  });
  const isFav = id ? favorites.some((m) => m["#IMDB_ID"] === id) : false;

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <div role="alert">
        <p>We could not load this movie</p>
        <button type="button" onClick={() => refetch()}>
          Try again
        </button>
      </div>
    );
  }
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <div>
        <h1>{movie["#TITLE"]}</h1>
        <p>{movie["#ACTORS"]}</p>
        <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} width={400} />
      </div>
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

export default MovieDetail;
