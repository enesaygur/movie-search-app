import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { useDebounce } from "./../hooks/useDebounce";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const debounceQuery = useDebounce(query, 500);
  const { movies, loading, error } = useMovieSearch(debounceQuery);

  useEffect(() => {
    if (debounceQuery.trim()) {
      setSearchParams({ q: debounceQuery });
    } else {
      setSearchParams({});
    }
  }, [debounceQuery, setSearchParams]);

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
export default Home;
