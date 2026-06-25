type SearchEmptyStateProps = {
  query: string;
};
function SearchEmptyState({ query }: SearchEmptyStateProps) {
  return (
    <div>
      <h2>No movies found</h2>
      <p>
        We could not find any movies matching "<strong>{query}</strong>"
      </p>
      <p>Try a different movie title.</p>
    </div>
  );
}

export default SearchEmptyState;
