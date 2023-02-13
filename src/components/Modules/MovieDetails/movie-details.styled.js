import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Card = styled.div`
  display: flex;
  gap: 50px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: 600;
`;

export const Wrap = styled.span`
  font-size: large;
  font-weight: 600;
`;

export const Button = styled.button`
  position: absolute;
`;

export const AdditionalTitle = styled.p`
  text-align: center;
  font-size: large;
  font-weight: 600;
`;

export const AddInform = styled(Link)`
  text-align: center;
  font-weight: bold;
  color: #000;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
