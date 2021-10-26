import _debounce from 'lodash.debounce';
import { useCallback } from 'react';

interface SearchInputProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; //?
}
const SearchInput = ({ setSearchQuery }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const debouncedHandleChange = useCallback(_debounce(handleChange, 600), []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <input
      className="search-input"
      type="search"
      onChange={debouncedHandleChange}
    />
  );
};

export default SearchInput;
