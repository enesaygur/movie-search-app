import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    console.log("Searching:", query);
  };
  return (
    <>
      <h1>Movie Search App</h1>
      <SearchBar value={query} onChange={setQuery} onSearch={handleSearch} />
      <p>{query}</p>
    </>
  );
}

export default App;
