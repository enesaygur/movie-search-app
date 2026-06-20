import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";
import type { Movie } from "./types/movie";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debounceQuery, setDebounceQuery] = useState(query);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    if (debounceQuery.length < 2) {
      setMovies(null);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await searchMovies(debounceQuery);
        setMovies(data);
      } catch {
        setError("Something went wrong");
        setMovies(null);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [debounceQuery]);

  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      {movies && movies.length === 0 && <p>No movies found.</p>}
    </>
  );
}

export default App;
