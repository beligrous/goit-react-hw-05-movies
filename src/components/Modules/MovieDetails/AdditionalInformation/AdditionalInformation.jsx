
import { useParams, useLocation } from "react-router-dom";
import { Title, AddInform, Container } from "./additional.styled";

function Additional () {
  const { id } = useParams();
  const location = useLocation();
  return (
    <Container>
       <Title>Additional information</Title>
       <AddInform state={{from: location.state.from}} to={`/movies/${id}/cast`}>Cast</AddInform>
       <AddInform state={{from: location.state.from}} to={`/movies/${id}/reviews`}>Reviews</AddInform>
     </Container>
  );
};

export default Additional;
