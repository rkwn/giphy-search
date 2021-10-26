import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { GifObject } from '../api/giphy-types';
import starRegular from '../assets/star-regular.svg';
import starSolid from '../assets/star-solid.svg';

interface GifCardProps {
  gif: GifObject;
}

const GifCard = ({ gif }: GifCardProps) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const isFavorite = favorites?.some((favorite) => favorite.id === gif.id);

  const toggleFavorite = (gif: GifObject) => {
    if (!isFavorite) {
      setFavorites([...favorites, gif]);
    } else {
      setFavorites([...favorites].filter((favorite) => favorite.id !== gif.id));
    }
  };

  return (
    <div className="gif-card" key={gif.id}>
      <img
        className="gif-img"
        src={gif.images.fixed_width_downsampled.url}
        alt="gif"
      />
      <img
        className="gif-favorite-icon"
        src={isFavorite ? starSolid : starRegular}
        alt={'favorite icon'}
        onClick={() => toggleFavorite(gif)}
      />
      <div className="gif-info">{gif.title}</div>
    </div>
  );
};
export default GifCard;
