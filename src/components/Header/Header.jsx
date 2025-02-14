import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';

const Header = () => {
  const user = useSelector(selectUser);
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <header className="bg-gray-300 shadow-md">
      <nav className=" flex  justify-between py-3 px-6 ">
        {isLoggenIn && (
          <p className="text-gray-700 font-semibold">Welcome, {user.name}</p>
        )}
        <Navigation />

        {isLoggenIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
export default Header;
