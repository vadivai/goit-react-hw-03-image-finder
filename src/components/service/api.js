// URL-строка HTTP-запроса.

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

// Pixabay API поддерживает пагинацию, по умолчанию параметр page равен 1. Пусть в ответе приходит по 12 объектов, установлено в параметре per_page. Не забудь что при поиске по новому ключевому слову, необходимо сбрасывать значение page в 1.

// В ответе от апи приходит массив объектов, в которых тебе интересны только следущие свойства.

// id - уникальный идентификатор
// webformatURL - ссылка на маленькое изображение для списка карточек
// largeImageURL - ссылка на большое изображение для модального окна

import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '32655416-b4a8f18676ee213d66752ceaa';
const params = 'image_type=photo&orientation=horizontal&safesearch=true';
let perPage = 12;

// запрос через axios
const fetchImages = async (query, page) => {
  const response = await axios.get(
    `${BASE_URL}?key=${KEY}&q=${query}&per_page=${perPage}&page=${page}&${params}`
  );
  return await response.data;
  // console.log(data.hits);
  // console.log(response);
};

export { perPage, fetchImages };

// import axios from 'axios';

// const API_KEY = 'LqdMyZMOt2jhKLy7gSpMcnkKi2ysGicFxR641v833ReVTacqB15tsu02';
// axios.defaults.baseURL = 'https://api.pexels.com/v1/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

// export const getImages = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);
//   return data;
// };
