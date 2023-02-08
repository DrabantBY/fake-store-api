import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const MainPage = () => (
  <>
    <Header />
    <main className="main bg-light">
      <section className="container">
        <Outlet />
      </section>
    </main>
    <Footer />
  </>
);

export default MainPage;
