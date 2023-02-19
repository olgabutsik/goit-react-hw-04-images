import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '32928246-6ae7869637525638a20b8d67d';

const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};
export const fetchPhotosByQuery = async (query, page) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${query}&key=${API_KEY}&${params}&page=${page}`
  );

  return data;
};
