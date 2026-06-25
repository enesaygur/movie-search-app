type SearchErrorStateProps = {
  onRetry: () => void;
};

function SearchErrorState({ onRetry }: SearchErrorStateProps) {
  return (
    <div role="alert">
      <h2>Search failed</h2>
      <p>We could not load movie results. Please try again.</p>
      <button onClick={onRetry}>Try again</button>
    </div>
  );
}
export default SearchErrorState;
