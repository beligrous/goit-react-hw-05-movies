import { Outlet, useParams } from 'react-router-dom';
import { Container, AddInform, Title } from './movies-page.styled';
import MovieDetails from 'components/Modules/MovieDetails/MovieDetails';


function MoviePage() {
  const { id } = useParams();
  return (
    <>
      <MovieDetails />
      <Title>Additional information</Title>
      <Container>
        <AddInform to={`/movies/${id}/cast`}>Cast</AddInform>
        <AddInform to={`/movies/${id}/reviews`}>Reviews</AddInform>
        <Outlet/>
      </Container>

    </>
  );
}

export default MoviePage;
