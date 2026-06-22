import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import { searchMovies } from "../services/movieService";

export function useMovieSearch(query: string) {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.length < 2) {
      setMovies(null);
      setError("");
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await searchMovies(query);
        setMovies(data);
      } catch {
        setError("Something went wrong");
        setMovies(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);
  return { movies, loading, error };
}
