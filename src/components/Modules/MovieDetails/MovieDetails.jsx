import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilmById } from 'service/api/getFilms';
import { Card, Title, Wrap } from './movie-details.styled';

function MovieDetails() {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState('');
  const [overview, setOverview] = useState('');
  const [popularity, setPopularity] = useState(0);
  const [year, setYear] = useState('');

  const { id } = useParams();
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

  const handleBack = () => navigate(-1);

  return (
    <>
      <button type="button" onClick={handleBack}>
        &#8678; Go back
      </button>
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
    </>
  );
}

export default MovieDetails;
