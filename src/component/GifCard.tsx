import { GifObject } from '../api/giphy-types';
import starRegular from '../assets/star-regular.svg';
interface GifCardProps {
  gif: GifObject;
}
const GifCard = ({ gif }: GifCardProps) => {
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
