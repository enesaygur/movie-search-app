import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";
import MovieList from "./components/MovieList";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const handleSearch = async () => {
    const data = await searchMovies(query);
    setMovies(data);
  };
  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
      <MovieList movies={movies} />
    </>
  );
}

export default App;
