import { GifObject } from '../api/giphy-types';
import GifCard from './GifCard';

interface GifListProps {
  gifList: GifObject[];
}
const GifList = ({ gifList }: GifListProps) => {
  return (
    <div className="gif-list">
      {gifList.map((gif) => {
        return <GifCard gif={gif} key={gif.id} />;
      })}
    </div>
  );
};
export default GifList;
