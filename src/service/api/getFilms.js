import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   params: {
//     api_key: 'c23d7755b502540a74ef819e02a6a593',
//     language: 'en-US',
//   },
// });

// export async function getFilms(page = 1) {
//   const { data } = await instance.get('/trending/movie/week', { page });
//   return data;
// }

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c23d7755b502540a74ef819e02a6a593';

export async function getFilms(page = 1) {
  const r = await axios
    .get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US&page=${page}`
    )
    .then(res => res.data);
  return r;
}
