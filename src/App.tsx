import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import type { Movie } from "./types/movie";
import Favorites from "./pages/Favorites";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { FavoriteContext } from "./context/FavoritesContext";

function App() {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>("favorites", []);

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m["#IMDB_ID"] === movie["#IMDB_ID"])) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((m) => m["#IMDB_ID"] !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/favorites"> Favorites</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </FavoriteContext.Provider>
  );
}

export default App;
