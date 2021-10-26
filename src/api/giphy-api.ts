// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const API_KEY = '9dYEGMEEMbbyiO4Ot7gLR7ELSrBdoUXd';
const BASE_API_URL = 'https://api.giphy.com/v1/gifs';

const generateGiphyURL = (path: string, params = {}) => {
  let searchParams = new URLSearchParams({ api_key: API_KEY, ...params });
  let queryString = searchParams.toString();
  return `${BASE_API_URL}${path}?${queryString}`;
};

type GiphySearchParams = {
  q: string;
  offset?: number;
  limit?: number;
};
export const searchGiphyURL = (params: GiphySearchParams) => {
  if (params.q === '') return;
  params.q = encodeURIComponent(params.q);
  return generateGiphyURL('/search', params);
};
