import React, { useState, createContext, useEffect } from 'react';
import { GifObject } from '../api/giphy-types';
import { mockResponse } from '../__mocks__/apiResponse';

interface FavoritesContextInterface {
  favorites: GifObject[];
  setFavorites: React.Dispatch<React.SetStateAction<GifObject[]>>;
}

export const FavoritesContext = createContext<FavoritesContextInterface>(
  {} as FavoritesContextInterface
);

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<GifObject[]>([]);

  const value = {
    favorites,
    setFavorites,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
