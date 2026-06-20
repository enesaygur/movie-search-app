import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";
import type { Movie } from "./types/movie";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async () => {
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
  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      {movies && movies.length === 0 && <p>No movies found.</p>}
    </>
  );
}

export default App;
