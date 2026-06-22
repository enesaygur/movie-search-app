import MovieList from "../components/MovieList";
import type { Movie } from "../types/movie";
type FavoritesProps = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};
function Favorites({ favorites, addFavorite, removeFavorite }: FavoritesProps) {
  return (
    <>
      <h1>Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <MovieList
          movies={favorites}
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
    </>
  );
}

export default Favorites;
