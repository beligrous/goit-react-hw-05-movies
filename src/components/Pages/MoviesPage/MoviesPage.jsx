import { Routes, Route, useParams } from 'react-router-dom';
import { Container, AddInform, Title } from './movies-page.styled';
import MovieDetails from 'components/Modules/MovieDetails/MovieDetails';
import Cast from 'components/Modules/MovieDetails/Cast/Cast';
import Reviews from 'components/Modules/MovieDetails/Reviews/Reviews';

function MoviePage() {
  const { id } = useParams();
  return (
    <>
      <MovieDetails />
      <Title>Additional information</Title>
      <Container>
        <AddInform to={`/movies/${id}/cast`}>Cast</AddInform>
        <AddInform to={`/movies/${id}/reviews`}>Reviews</AddInform>
      </Container>
      <Routes>
        <Route path={`/movies/${id}/cast`} element={<Cast />} />
        <Route path={`/movies/${id}/reviews`} element={<Reviews />} />
      </Routes>
    </>
  );
}

export default MoviePage;
