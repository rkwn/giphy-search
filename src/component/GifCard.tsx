import { useContext } from 'react';
import { GifObject } from '../api/giphy-types';
import starRegular from '../assets/star-regular.svg';
import { FavoritesContext } from '../context/FavoritesContext';
interface GifCardProps {
  gif: GifObject;
}
const GifCard = ({ gif }: GifCardProps) => {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  console.log('fav', favorites);
  return (
    <div className="gif-card" key={gif.id}>
      <img
        className="gif-img"
        src={gif.images.fixed_width_downsampled.url}
        alt="gif"
      />
      <img
        className="gif-favorite-icon"
        src={starRegular}
        alt={'favorite icon'}
        onClick={() => console.log('click')}
      />
      <div className="gif-info">{gif.title}</div>
    </div>
  );
};
export default GifCard;
