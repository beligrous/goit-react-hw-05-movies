import { useSearchParams } from 'react-router-dom';

function MovieSearchPage() {
  const [searchParams, setSearchParams] = useSearchParams({ search: '' });
  const search = searchParams.get('search');
  console.log(search);

  const handleSubmit = () => {};

  return (
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
  );
}

export default MovieSearchPage;
