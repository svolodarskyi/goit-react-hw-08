import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import Navigation from '../Navigation';

const AppBar = () => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return (
    <header className="bg-gray-300 shadow-md">
      <nav className=" flex  justify-between py-3 px-6 ">
        <Navigation />
        {isLoggenIn ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
};
export default AppBar;
