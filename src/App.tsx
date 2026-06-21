import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import type { Movie } from "./types/movie";
import { useEffect, useState } from "react";

function App() {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const addFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      if (prev.find((m) => m["#IMDB_ID"] === movie["#IMDB_ID"])) return prev;
      return [...prev, movie];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((m) => m["#IMDB_ID"] !== id));
  };
  
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        }
      />
      <Route
        path="/movie/:id"
        element={
          <MovieDetail
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
