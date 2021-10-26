import { useEffect, useState } from 'react';
import GifList from '../component/GifList';
import SearchInput from '../component/SearchInput';
import { mockResponse } from '../__mocks__/apiResponse';

const SearchPage = () => {
  const [gifList, setGifList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    (async () => {
      const url = `https://api.giphy.com/v1/gifs/search?api_key=9dYEGMEEMbbyiO4Ot7gLR7ELSrBdoUXd&q=${searchQuery}&limit=10&offset=0`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setGifList(data.data);
    })();
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <main className="search">
      <SearchInput setSearchQuery={setSearchQuery} />
      {/* {gifList.length && <GifList gifList={gifList} />} */}
      <GifList gifList={gifList} />
    </main>
  );
};
export default SearchPage;
