const SearchInput = ({
  setSearchQuery,
}: {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <input
      className="search-input"
      type="search"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
