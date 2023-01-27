import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/opencart.svg';
import { ReactComponent as DollarIcon } from '../../assets/dollar-sign-solid.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-shopping-solid.svg';

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link className="logo-link header__logo-link" to="/">
        Good
        <Logo height={50} fill="#a855f7" />
        tore
      </Link>
      <Link className="cart-link header__cart-link" to="cart">
        <span className="cart-icon header__cart-icon">
          <CartIcon height={50} fill="#2563eb" />
        </span>
        &amp;
        <span className="dollar-icon header__dollar-icon">
          <DollarIcon height={50} fill="#2563eb" />
        </span>
      </Link>
    </div>
  </header>
);

export default Header;
