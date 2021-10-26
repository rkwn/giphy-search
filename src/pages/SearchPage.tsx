import { useEffect, useState } from 'react';
import { searchGiphyURL } from '../api/giphy-api';
import GifList from '../component/GifList';
import SearchInput from '../component/SearchInput';
import useFetch from '../hooks/useFetch';
// const {response, isLoading, error} = useFetch(searchGiphyURL(searchQuery))

const SearchPage = () => {
  const [gifList, setGifList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const offset = 0;
  const limit = 10;
  const params = { q: searchQuery, offset: offset, limit: limit };

  const { response, isLoading, error } = useFetch(searchGiphyURL(params));

  useEffect(() => {
    if (response?.data) setGifList(response.data);
  }, [response, setGifList]);

  // useEffect(() => {
  //   (async () => {
  //     const url = `https://api.giphy.com/v1/gifs/search?api_key=9dYEGMEEMbbyiO4Ot7gLR7ELSrBdoUXd&q=${searchQuery}&limit=10&offset=0`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //     setGifList(data.data);
  //   })();
  //   console.log(searchQuery);
  // }, [searchQuery]);
  if (error instanceof Error) return <h1>Error: {error.message}</h1>;
  return (
    <main className="search">
      <SearchInput setSearchQuery={setSearchQuery} />
      {isLoading ? <h1>Loading...</h1> : <GifList gifList={gifList} />}
    </main>
  );
};
export default SearchPage;
