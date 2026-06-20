type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search movie.."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
