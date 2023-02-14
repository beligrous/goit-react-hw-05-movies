import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmSearch } from 'service/api/getFilms';
import FilmList from 'components/Modules/FilmList/FilmList';

function MovieSearchPage() {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searchParams.get('search');

  useEffect(() => {
    setQ(search);
    const fetchFilm = async () => {
      setLoading(true);
      try {
        const data = await getFilmSearch(search);
        setItems(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchFilm();
    }
  }, [search, searchParams.search]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search: q });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <FilmList items={items} loading={loading} error={error} />
    </>
  );
}

export default MovieSearchPage;

MovieSearchPage.defaultProps = {
  items: [],
};
