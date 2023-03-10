import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'c23d7755b502540a74ef819e02a6a593',
    language: 'en-US',
  },
});

export async function getFilms(page = 1) {
  const { data } = await instance.get('/trending/movie/week', { page });
  return data;
}

export async function getFilmById(id) {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
}

// export async function getFilmSearch(search) {
//   const { data } = await instance.get(`/search/movie/?query=${search}`);
//   return data;
// }

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'c23d7755b502540a74ef819e02a6a593';
const page = 1;

export async function getFilmSearch(query) {
  const r = await axios
    .get(
      `/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=${page}`
    )
    .then(res => res.data);
  return r.results;
}

export async function getReviews(id) {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
}

export async function getCast(id) {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
}
