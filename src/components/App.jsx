import { Routes, Route } from 'react-router-dom';
import { Container } from './app.styled';
import Menu from './Modules/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviesPage/MoviesPage';
import MovieSearchPage from './Pages/MoviesPage/MovieSearchPage/MovieSearchPage';
import Cast from 'components/Modules/MovieDetails/Cast/Cast';
import Reviews from 'components/Modules/MovieDetails/Reviews/Reviews';

export const App = () => {
  //   const handleSearch = ({ search }) => {
  //     console.log(search);
  //   };

  return (
    <Container>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MovieSearchPage />} />
        <Route path="/movies/:id/*" element={<MoviePage />} >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
};
