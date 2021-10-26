import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { GifObject } from '../api/giphy-types';
import starRegular from '../assets/star-regular.svg';
import starSolid from '../assets/star-solid.svg';

interface GifCardProps {
  gif: GifObject;
  isFavorite: boolean;
}

const GifCard = ({ gif, isFavorite }: GifCardProps) => {
  const { toggleFavorite } = useContext(FavoritesContext);
  const {
    id,
    title,
    images: {
      fixed_width_downsampled: { url },
    },
  } = gif;

  return (
    <div className="gif-card" key={id}>
      <img className="gif-img" src={url} alt="gif" />
      <img
        className="gif-favorite-icon"
        src={isFavorite ? starSolid : starRegular}
        alt={'favorite icon'}
        onClick={() => toggleFavorite(gif)}
      />
      <div className="gif-info">{title}</div>
    </div>
  );
};
export default GifCard;
