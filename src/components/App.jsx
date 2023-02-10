import { Routes, Route } from 'react-router-dom';
import { Container } from './app.styled';
import Menu from './Modules/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviesPage/MoviesPage';
import MovieSearchPage from './Pages/MoviesPage/MovieSearchPage/MovieSearchPage';

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
        <Route path="/movies/:id/*" element={<MoviePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
};
