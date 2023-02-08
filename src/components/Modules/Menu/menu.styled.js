import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px;
  margin: 0;
  list-style: none;
  background-color: bisque;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  &.active {
    color: brown;
    text-decoration: underline;
  }
`;
