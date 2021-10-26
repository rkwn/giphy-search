import React, { useState, createContext, useEffect } from 'react';
import { GifObject } from '../api/giphy-types';

interface FavoritesContextInterface {
  favorites: GifObject[];
  setFavorites: React.Dispatch<React.SetStateAction<GifObject[]>>;
}

export const FavoritesContext = createContext<FavoritesContextInterface>(
  {} as FavoritesContextInterface
);

const getFavoritesFromLocalStorage = () => {
  const storage = localStorage.getItem('favorites');
  // console.log(storage);
  if (storage) return JSON.parse(storage);
  return [];
};

const storeFavoritesInLocalStorage = (favorites: GifObject[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
  // console.log('from setter, localStorage', localStorage);
};

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<GifObject[]>(
    getFavoritesFromLocalStorage()
  );

  useEffect(() => {
    storeFavoritesInLocalStorage(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
