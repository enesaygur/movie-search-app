import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} />
      <p>{query}</p>
    </>
  );
}

export default App;
