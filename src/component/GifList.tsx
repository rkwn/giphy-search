import { GifObject } from '../api/giphy-types';
import GifCard from './GifCard';

// const GifList = () => {
//   return (
//     <div className="gif-list">
//       <h1>gif lsit </h1>
//       <GifCard />
//     </div>
//   );
// };

interface GifListProps {
  gifList: GifObject[];
}
const GifList = ({ gifList }: GifListProps) => {
  return (
    <div className="gif-list">
      {gifList.length &&
        gifList.map((gif) => {
          return <GifCard gif={gif} />;
        })}
    </div>
  );
};
export default GifList;
