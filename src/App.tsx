import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {!loading && <MovieList movies={movies} />}
    </>
  );
}

export default App;
