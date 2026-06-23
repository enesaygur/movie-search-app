import { useContext } from "react";
import MovieList from "../components/MovieList";
import { FavoriteContext } from "../context/FavoritesContext";
function Favorites() {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("FavoriteContext is not provided");
  }

  const { favorites } = context;
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
