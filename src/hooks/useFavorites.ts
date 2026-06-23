import { useContext } from "react";
import { FavoriteContext } from "../context/FavoritesContext";

export function useFavorites() {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("FavoriteContext is not provided");
  }

  return context;
}
