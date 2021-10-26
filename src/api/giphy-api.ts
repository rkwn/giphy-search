// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = '9dYEGMEEMbbyiO4Ot7gLR7ELSrBdoUXd';
const BASE_API_URL = 'https://api.giphy.com/v1/gifs';

/*
https://api.giphy.com/v1/gifs/search?api_key=<api_key>&q=mysearchquery&limit=25&offset=0&rating=g&lang=en
https://api.giphy.com/v1/gifs/trending?api_key=<api_key>&limit=25&rating=g

*/

const generateGiphyURL = (path: string, params = {}) => {
  let searchParams = new URLSearchParams({ api_key: API_KEY, ...params });
  let queryString = searchParams.toString();
  return `${BASE_API_URL}${path}?${queryString}`;
};

export const searchGiphyURL = (
  params = {
    q: '',
    offset: 0,
    limit: 25,
  }
) => {
  return generateGiphyURL('/search', params);
};

export interface SearchGiphyParams {
  q: string;
  offset: number;
  limit: number;
}

export const searchGiphy = (params: SearchGiphyParams) => {
  if (params) {
    const { q } = params;
    if (q) {
      const url = generateGiphyURL('/search', params);
      return fetch(url);
    }
  }
  throw new Error('No query provided');
};
