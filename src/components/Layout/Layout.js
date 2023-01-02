import { Outlet } from 'react-router-dom';
// import { GlobalStyle } from '../GlobalStyle';
import AppBar from '../AppBar';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Layout;
