import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainPage = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default MainPage;
