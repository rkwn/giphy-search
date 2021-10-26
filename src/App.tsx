import React, { useEffect, useState } from 'react';

import './App.css';
import { mockResponse } from './__mocks__/apiResponse';

const testURL =
  'https://api.giphy.com/v1/gifs/search?api_key=9dYEGMEEMbbyiO4Ot7gLR7ELSrBdoUXd&q=test&limit=10&offset=0';
function App() {
  const [gifs, setGifs] = useState(mockResponse.data);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(testURL);
  //     const data = await response.json();
  //     console.log(data);
  //     setGifs(data.data);
  //   })();
  // }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <a className="nav-link" href="#">
          Search
        </a>
        <a className="nav-link" href="#">
          Saved
        </a>
      </nav>
      <div className="search">
        <input className="search-input" type="search" />
      </div>
      <div className="gif-list">
        {gifs.length &&
          gifs.map((gif) => {
            return (
              <div className="gif-card" key={gif.id}>
                <img
                  className="gif-img"
                  src={gif.images.fixed_width_downsampled.url}
                  alt="gif"
                />
                <div className="gif-info">{gif.title}</div>
                <span className="gif-favorite-icon">⭐</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
