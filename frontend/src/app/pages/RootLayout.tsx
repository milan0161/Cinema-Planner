import { Outlet } from 'react-router-dom';
import Header from '../../common/components/header/Header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { getAToken } from '../utils/saveToken';
import { decodedAToken } from '../utils/decodeToken';
import { setIsAuth, setUser } from '../../features/auth-module/authSlice';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (isAuth) {
      return;
    }
    const aToken = getAToken();
    if (aToken) {
      const user = decodedAToken(aToken);
      dispatch(
        setUser({ role: user!.role, username: user!.email, token: aToken }),
      );
      dispatch(setIsAuth(true));
    } else return;
  }, []);

  return (
    <div className="">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;