import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <ul>
      <li>
        <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={'/movies'}>Movies</NavLink>
      </li>
    </ul>
  );
}

export default Menu;
