import type { Movie } from "../types/movie";

type State = {
  favorites: Movie[];
};
type Action =
  | { type: "ADD_FAVORITE"; payload: Movie }
  | { type: "REMOVE_FAVORITE"; payload: string };
export function favoritesReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_FAVORITE":
      if (
        state.favorites.find(
          (m) => m["#IMDB_ID"] === action.payload["#IMDB_ID"],
        )
      ) {
        return state;
      }
      return {
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        favorites: state.favorites.filter(
          (m) => m["#IMDB_ID"] !== action.payload,
        ),
      };
    default:
      return state;
  }
}
