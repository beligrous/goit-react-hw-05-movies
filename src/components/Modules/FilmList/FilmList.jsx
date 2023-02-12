import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function FilmList({ items, loading, error }) {
  const location = useLocation();
  const filmList = items.map(({ id, title }) => (
    <li key={id}>
      <Link state={{from: location}} to={`/movies/${id}`}>{title}</Link>
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

FilmList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }
  ))
}
