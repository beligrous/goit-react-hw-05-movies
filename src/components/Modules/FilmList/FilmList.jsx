import { Link } from 'react-router-dom';

function FilmList({ items, loading, error }) {
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

export default FilmList;
