import { useEffect, useState } from 'react';

import { searchGiphyURL } from '../api/giphy-api';
import useFetch from '../hooks/useFetch';
import { GifObject } from '../api/giphy-types';
import GifList from '../component/GifList';
import SearchInput from '../component/SearchInput';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [gifList, setGifList] = useState<GifObject[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const limit = 25;
  const params = { q: searchQuery, offset: offset, limit: limit };
  const { response, isLoading, error } = useFetch(searchGiphyURL(params));

  useEffect(() => {
    setGifList([]);
    setOffset(0);
  }, [searchQuery]);

  useEffect(() => {
    if (response?.data) setGifList((gifList) => [...gifList, ...response.data]);
  }, [response, setGifList]);

  // Determine whether pagination has reached total_count in pagination object returned from server
  const hasMoreGifs =
    response?.pagination.offset + limit < response?.pagination.total_count;

  if (error instanceof Error) return <h1>Error: {error.message}</h1>;
  return (
    <main className="search">
      <SearchInput setSearchQuery={setSearchQuery} />
      {isLoading ? <h1>Loading...</h1> : <GifList gifList={gifList} />}
      {hasMoreGifs ? (
        <button onClick={() => setOffset((offset) => offset + limit)}>
          Load More...
        </button>
      ) : null}
    </main>
  );
};
export default SearchPage;
