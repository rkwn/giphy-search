import { GifObject } from '../api/giphy-types';

// const GifCard = () => {
//   return (
//     <div className="gif-card">
//       <h1>gif card</h1>
//       <span className="gif-favorite-icon">⭐</span>
//     </div>
//   );
// };

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
      {/* <div className="gif-info">{gif.title}</div> */}
      <span className="gif-favorite-icon">⭐</span>
    </div>
  );
};
export default GifCard;
