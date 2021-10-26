import React from 'react';
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import GifCard from './GifCard';
import { mockGifObject } from '../__mocks__/mockGifObject';

describe('<GifCard />', () => {
  it('displays a gif', () => {
    const toggleFavorite = jest.fn();
    const gifCard = render(
      <StaticRouter>
        <GifCard
          gif={mockGifObject}
          isFavorite={false}
          toggleFavorite={toggleFavorite}
        />
      </StaticRouter>
    );
    const {
      images: {
        fixed_width_downsampled: { url },
      },
    } = mockGifObject;
    const gifImg = gifCard.getByAltText('gif');
    expect(gifImg.src).toContain(url);
  });

  it('should render the correct favorite icon depending on isFavorite prop', () => {
    const toggleFavorite = jest.fn();
    const gifCard = render(
      <StaticRouter>
        <GifCard
          gif={mockGifObject}
          isFavorite={false}
          toggleFavorite={toggleFavorite}
        />
      </StaticRouter>
    );

    const favoriteIcon = gifCard.getByAltText('favorite icon');
    expect(favoriteIcon.src).toContain('star-regular.svg');
  });
});
