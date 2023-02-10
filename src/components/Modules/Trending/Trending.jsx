import { useState, useEffect } from 'react';
import { getFilms } from 'service/api/getFilms';
import FilmList from '../FilmList/FilmList';

function Trending() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const data = await getFilms();
        setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return <FilmList items={items} loading={loading} error={error} />;
}

export default Trending;
