import MovieList from "../components/MovieList";
import { useFavorites } from "../hooks/useFavorites";
function Favorites() {
  const { favorites } = useFavorites();
  return (
    <>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <MovieList movies={favorites} />
      )}
    </>
  );
}

export default Favorites;
