import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const MainPage = () => (
  <>
    <Header />
    <main className="main">
      <div className="container main__container">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

export default MainPage;
