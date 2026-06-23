import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import { FavoritesProvider } from "./context/FavoritesProvider";

function App() {
  return (
    <FavoritesProvider>
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
    </FavoritesProvider>
  );
}

export default App;
