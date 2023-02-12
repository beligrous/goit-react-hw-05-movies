import { Outlet } from 'react-router-dom';
import MovieDetails from 'components/Modules/MovieDetails/MovieDetails';


function MoviePage() {

  return (
    <>
      <MovieDetails />
      <Outlet/>
    </>
  );
}

export default MoviePage;
