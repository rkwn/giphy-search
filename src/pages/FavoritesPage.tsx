import { useContext } from 'react';

import { FavoritesContext } from '../context/FavoritesContext';
import GifList from '../component/GifList';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <main className="saved-page">
      <h1>Saved</h1>
      <GifList gifList={favorites} />
    </main>
  );
};

export default FavoritesPage;
