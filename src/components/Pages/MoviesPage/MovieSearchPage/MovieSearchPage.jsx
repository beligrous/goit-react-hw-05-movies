import { useSearchParams } from 'react-router-dom';

function MovieSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searchParams.get('search');
  console.log(search);

  const handleSubmit = e => {
    // e.preventDefault();
    setSearchParams({ search: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={search} onChange={handleSubmit} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default MovieSearchPage;
