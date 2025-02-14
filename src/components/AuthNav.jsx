import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default AuthNav;
