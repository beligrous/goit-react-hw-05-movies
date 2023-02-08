import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilms } from 'service/api/getFilms';

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

  const filmList = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      {loading && <p>please wait, loading...</p>}
      <ul>{filmList}</ul>
      {error && <p>{error}</p>}
    </>
  );
}

export default Trending;
