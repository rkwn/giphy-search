import React, { useState, createContext, useEffect } from 'react';
import { GifObject } from '../api/giphy-types';

interface FavoritesContextInterface {
  favorites: GifObject[];
  setFavorites: React.Dispatch<React.SetStateAction<GifObject[]>>;
  isFavorite: (id: string) => boolean;
  toggleFavorite: (gif: GifObject) => void;
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

  const isFavorite = (id: string): boolean =>
    favorites.some((favorite) => favorite.id === id);

  const toggleFavorite = (gif: GifObject) => {
    if (!isFavorite(gif.id)) {
      setFavorites([...favorites, { ...gif }]);
    } else {
      setFavorites([...favorites].filter((favorite) => favorite.id !== gif.id));
    }
  };

  useEffect(() => {
    storeFavoritesInLocalStorage(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
