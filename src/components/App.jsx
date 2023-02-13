import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Ring } from './app.styled';
import { ColorRing } from 'react-loader-spinner';

const Menu = lazy(() => import('./Modules/Menu/Menu'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('./Modules/MovieDetails/MovieDetails'));
const MovieSearchPage = lazy(() =>
  import('./Pages/MoviesPage/MovieSearchPage/MovieSearchPage')
);
const Cast = lazy(() => import('components/Modules/MovieDetails/Cast/Cast'));
const Reviews = lazy(() =>
  import('components/Modules/MovieDetails/Reviews/Reviews')
);

export const App = () => {
  return (
    <Container>
      <Suspense
        fallback={
          <Ring>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          </Ring>
        }
      >
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MovieSearchPage />} />
          <Route path="/movies/:id/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
