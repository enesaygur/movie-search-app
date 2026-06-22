import { useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { useMovieSearch } from "../hooks/useMovieSearch";
type HomeProps = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};

function Home({ favorites, addFavorite, removeFavorite }: HomeProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [debounceQuery, setDebounceQuery] = useState(initialQuery);
  const { movies, loading, error } = useMovieSearch(debounceQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query]);

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
      {error && <p style={{ color: "red" }}>{error}</p>}
      {movies && movies.length > 0 && (
        <MovieList
          movies={movies}
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
      {movies && movies.length === 0 && <p>No movies found.</p>}
    </>
  );
}
export default Home;
