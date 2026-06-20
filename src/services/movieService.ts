export async function searchMovies(query: string) {
  const res = await fetch(
    `https://imdb.iamidiotareyoutoo.com/search?q=${query}`,
  );
  const data = await res.json();
  return data.description || [];
}

export const getMovieById = async (id: string) => {
  const res = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${id}`);

  if (!res.ok) {
    throw new Error("Movie not found");
  }
  const data = await res.json();

  return data.description[0] || null;
};