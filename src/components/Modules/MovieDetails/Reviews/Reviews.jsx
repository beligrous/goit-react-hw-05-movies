import { getReviews } from 'service/api/getFilms';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



function Reviews() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const[error, setError] = useState(null);
  const { id }  = useParams();

  useEffect(() => {
    const fetchReviews = async id => {
      setLoading(true);
      try {
        const data = await getReviews(id);
          setItems(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
      fetchReviews(id);
  },[id]);

  const elements = items.map(({id, content, author})=><li key={id}><p>Author: {author}</p><p>{content}</p></li>)

  return (<>{loading && <p>please wait, loading...</p>}
  <ul>{elements}</ul>
  {error && <p>{error}</p>}</>);
}

export default Reviews;
