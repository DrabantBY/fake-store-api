import Header from '@components/Header/Header';
import Error from '@components/Error/Error';
import Footer from '@components/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="main bg-light">
        <section className="container">
          <Error />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
