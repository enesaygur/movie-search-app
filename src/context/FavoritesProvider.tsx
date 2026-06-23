import { useEffect, useReducer } from "react";
import { favoritesReducer } from "./favoritesReducer";
import type { Movie } from "../types/movie";
import { FavoriteContext } from "./FavoritesContext";
const initialState = {
  favorites: [],
};
export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState, () => {
    const saved = localStorage.getItem("favorites");
    return saved ? { favorites: JSON.parse(saved) } : initialState;
  });

  const addFavorite = (movie: Movie) => {
    dispatch({ type: "ADD_FAVORITE", payload: movie });
  };

  const removeFavorite = (id: string) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoriteContext.Provider
      value={{ favorites: state.favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
