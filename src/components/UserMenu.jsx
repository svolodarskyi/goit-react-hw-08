import { useDispatch } from 'react-redux';
import { logoutThunk } from '../redux/auth/operations';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/contacts">Contacts</NavLink>
      <button
        className="cursor-pointer border-2 border-white rounded-md px-2 py-1"
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
