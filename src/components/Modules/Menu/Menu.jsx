// import { NavLink } from 'react-router-dom';
import { Container, Item } from 'components/Modules/Menu/menu.styled';
function Menu() {
  return (
    <Container>
      <li>
        <Item to={'/'}>Home</Item>
      </li>
      <li>
        <Item to={'/movies'}>Movies</Item>
      </li>
    </Container>
  );
}

export default Menu;
