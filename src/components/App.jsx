import { Routes, Route } from 'react-router-dom';
import { Container } from './app.styled';
import Menu from './Modules/Menu/Menu';
import HomePage from './Pages/HomePage/HomePage';

export const App = () => {
  return (
    <Container>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
};
