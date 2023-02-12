
import { useParams } from "react-router-dom";
import { Title, AddInform, Container } from "./additional.styled";

function Additional () {
  const { id } = useParams();
  return (
    <Container>
     <Title>Additional information</Title>
     <AddInform to={`/movies/${id}/cast`}>Cast</AddInform>
        <AddInform to={`/movies/${id}/reviews`}>Reviews</AddInform>
     </Container>
  );
};

export default Additional;
