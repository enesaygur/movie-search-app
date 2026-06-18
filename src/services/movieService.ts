export async function searchMovies(query: string) {
  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${query}`,
  );
  const data = await res.json();
  return data.description || [];
}
