import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { login, logout } from '../features/auth/authSlice';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className='navbar'>
      {isAuthenticated ? (
        <>
          <span>Bem-vindo, {user?.name}</span>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login({ name: 'Fulano' }))}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
