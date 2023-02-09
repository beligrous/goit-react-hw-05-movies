import { Routes, Route } from 'react-router-dom';
import { Container } from './app.styled';
import Menu from './Modules/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';
import MoviePage from './Pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <Container>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id/*" element={<MoviePage />} />
      </Routes>
    </Container>
  );
};
