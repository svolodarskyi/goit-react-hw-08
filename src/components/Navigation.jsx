import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLoggenIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
};

export default Navigation;
