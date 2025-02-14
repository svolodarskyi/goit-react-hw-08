import { useDispatch } from 'react-redux';
import { logoutThunk } from '../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggenIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <div>
      {isLoggenIn && (
        <p className="text-gray-700 font-semibold">Welcome, {user.name}</p>
      )}

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
