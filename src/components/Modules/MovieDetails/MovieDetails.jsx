import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from 'service/api/getFilms';

function MovieDetails() {
  const [title, setTitle] = useState('');
  const [genres, setGenres] = useState([]);
  const [poster_path, setPoster_path] = useState('');
  const [overview, setOverview] = useState('');

  const { id } = useParams();
  useEffect(() => {
    const fetchFilmById = async id => {
      const result = await getFilmById(id);
      setTitle(result.title);
      setGenres(result.genres.map(item => item.name));
      setPoster_path(result.poster_path);
      setOverview(result.overview);
    };
    fetchFilmById(id);
  }, [id]);

  return (
    <>
      <p>
        Title:
        {title}
      </p>
      <p>Genres: {Object.values(genres)}</p>
      <img href={poster_path} alt={title} />
      <p>Overview:{overview}</p>
    </>
  );
}

export default MovieDetails;
