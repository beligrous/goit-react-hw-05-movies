import { Link } from "react-router-dom";
import styled from '@emotion/styled';

export const Title = styled.p`
  font-size: large;
  font-weight: 600;
`;

export const AddInform = styled(Link)`
  font-weight: bold;
  color: #000;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
