import { createContext } from "react";
import type { Movie } from "../types/movie";
type FavoriteContextType = {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
};
export const FavoriteContext = createContext<FavoriteContextType | null>(null);
