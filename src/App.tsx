import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      setError("Something went wrong");
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
      {!loading && <MovieList movies={movies} />}
    </>
  );
}

export default App;
