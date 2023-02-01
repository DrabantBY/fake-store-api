import { Link } from 'react-router-dom';
import useCartState from '../../state';
import { ReactComponent as Logo } from '../../assets/opencart.svg';
import { ReactComponent as CartIcon } from '../../assets/basket.svg';

const Header = () => {
  const { getCartParams } = useCartState();

  const { cartSize, cartSum } = getCartParams();

  return (
    <header className="header py-1 bg-dark">
      <div className="container">
        <nav className="navbar">
          <Link
            className="d-flex align-items-center fs-1 fw-semibold text-decoration-none position-relative"
            to="/">
            Good
            <Logo height={40} fill="#fff" />
            tore
            {Boolean(cartSum) && (
              <span className="position-absolute top-0 start-100 badge rounded-pill bg-primary text-white fs-6">
                {cartSum}&nbsp;$
              </span>
            )}
          </Link>
          <Link className="btn btn-outline-primary position-relative me-3" to="cart">
            <CartIcon height={25} width={25} />
            {Boolean(cartSize) && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary text-white fs-7">
                {cartSize}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
