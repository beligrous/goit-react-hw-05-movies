import { Routes, Route } from 'react-router-dom';
import MovieDetails from 'components/Modules/MovieDetails/MovieDetails';
import Cast from 'components/Modules/MovieDetails/Cast/Cast';
import Reviews from 'components/Modules/MovieDetails/Reviews/Reviews';

function MoviePage() {
  return (
    <>
      <MovieDetails />
      <p>Additional information</p>
      <Routes>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

export default MoviePage;
