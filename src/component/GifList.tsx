import { useContext } from 'react';
import { GifObject } from '../api/giphy-types';
import { FavoritesContext } from '../context/FavoritesContext';

import GifCard from './GifCard';

interface GifListProps {
  gifList: GifObject[];
}

const GifList = ({ gifList }: GifListProps) => {
  const { isFavorite } = useContext(FavoritesContext);
  const gifIds = new Set();

  return (
    <div className="gif-list">
      {gifList
        .filter((gif) => {
          // filter out duplicates returned from API
          if (gifIds.has(gif.id)) return false;
          gifIds.add(gif.id);
          return true;
        })
        .map((gif) => {
          return (
            <GifCard gif={gif} key={gif.id} isFavorite={isFavorite(gif.id)} />
          );
        })}
    </div>
  );
};
export default GifList;
