import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/movieService";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const debounceQuery = useDebounce(query, 500);

  const {
    data: movies,
    isLoading: loading,
    error: error,
  } = useQuery({
    queryKey: ["movies", debounceQuery],
    queryFn: () => searchMovies(debounceQuery),
    enabled: debounceQuery.trim().length > 2,
  });
  useEffect(() => {
    if (query.trim()) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Something went wrong</p>}
      {movies && movies.length > 0 && <MovieList movies={movies} />}
      {movies && movies.length === 0 && <p>No movies found.</p>}
    </>
  );
}
export default Home;
