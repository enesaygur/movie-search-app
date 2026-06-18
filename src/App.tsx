import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { searchMovies } from "./services/movieService";

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
      <ul>
        {movies.map((movie) => (
          <li key={movie["#IMDB_ID"]}>{movie["#TITLE"]}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
