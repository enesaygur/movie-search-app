import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Movie } from "../types/movie";
import { getMovieById } from "../services/movieService";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!id) return;
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getMovieById(id);
        setMovie(data);
      } catch {
        setError("Something went wrong");
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h1>{movie["#TITLE"]}</h1>
      <p>{movie["#ACTORS"]}</p>
      <img src={movie["#IMG_POSTER"]} alt={movie["#TITLE"]} width={400} />
    </div>
  );
}

export default MovieDetail;
