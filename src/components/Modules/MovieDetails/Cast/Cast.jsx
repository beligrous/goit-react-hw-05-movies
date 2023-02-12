
import { getCast } from 'service/api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container} from './cast.styled';


function Cast() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const { id }  = useParams();

  useEffect(() => {
    const fetchCast = async id => {
      setLoading(true);
      try {
        const data = await getCast(id);
          setItems(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
      fetchCast(id);
  },[id]);

  const elements = items.map(({cast_id, profile_path, name, character})=><li key={cast_id}><img src={`https://image.tmdb.org/t/p/original${profile_path}`}
  alt='Actor name'
  width={100}/><p>{name}</p><p>Character: {character}</p></li>)

  return (<>{loading && <p>please wait, loading...</p>}
  <Container>{elements}</Container>
  {error && <p>{error}</p>}</>);
}

export default Cast;
