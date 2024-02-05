import axios from 'axios';

const ACCESS_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const BASE_URL = 'https://api.unsplash.com/search/photos/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query: query,
      page: page,
      per_page: 40,
      order_by: 'latest',
      orientation: 'landscape',
    },
  });
  
  return response.data;
};
