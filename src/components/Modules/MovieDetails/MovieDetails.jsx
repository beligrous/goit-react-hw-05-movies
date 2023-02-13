import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getFilmById } from 'service/api/getFilms';
import {
  Card,
  Title,
  Wrap,
  Button,
  AdditionalTitle,
  AddInform,
  Container,
} from './movie-details.styled';

function MovieDetails() {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState('');
  const [overview, setOverview] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [year, setYear] = useState('');

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFilmById = async id => {
      const {
        title,
        genres,
        poster_path,
        overview,
        vote_average,
        release_date,
      } = await getFilmById(id);
      setTitle(title);
      setGenres(genres.map(item => item.name));
      setPoster_path(poster_path);
      setOverview(overview);
      setPopularity(vote_average);
      setYear(release_date.split('-'));
    };
    fetchFilmById(id);
  }, [id]);

  const handleBack = () => navigate(location.state.from);

  return (
    <>
      <Button type="button" onClick={handleBack}>
        &#8678; Go back
      </Button>
      <Card>
        <img
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          alt={title}
          width={300}
        />
        <div>
          <Title>
            {title}
            {`(${year[0]})`}
          </Title>
          <p>
            <Wrap>User Score:</Wrap> {popularity.toFixed(1)}
          </p>
          <p>
            <Wrap>Genres:</Wrap> {genres.join(' ')}
          </p>
          <p>
            <Wrap>Overview:</Wrap> {overview}
          </p>
        </div>
      </Card>
      <Container>
        <AdditionalTitle>Additional information</AdditionalTitle>
        <AddInform
          state={{ from: location.state.from }}
          to={`/movies/${id}/cast`}
        >
          Cast
        </AddInform>
        <AddInform
          state={{ from: location.state.from }}
          to={`/movies/${id}/reviews`}
        >
          Reviews
        </AddInform>
      </Container>
      <Outlet />
    </>
  );
}

export default MovieDetails;
