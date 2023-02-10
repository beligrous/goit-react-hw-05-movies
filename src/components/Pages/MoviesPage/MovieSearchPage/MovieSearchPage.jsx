import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmSearch } from 'service/api/getFilms';
import FilmList from 'components/Modules/FilmList/FilmList';

function MovieSearchPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchFilm = async () => {
      setLoading(true);
      try {
        const data = await getFilmSearch(search);
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchFilm();
    }
  }, [search]);

  console.log(items);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={search}
            onChange={e => setSearchParams({ search: e.target.value })}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <FilmList items={items} loading={loading} error={error} />
    </>
  );
}

export default MovieSearchPage;

MovieSearchPage.preventDefaultProps = {
  items: [],
};
