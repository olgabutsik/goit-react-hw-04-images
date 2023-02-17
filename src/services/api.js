import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32928246-6ae7869637525638a20b8d67d';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const fetchPhotosByQuery = async (query, page = 1) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  return data;
};
