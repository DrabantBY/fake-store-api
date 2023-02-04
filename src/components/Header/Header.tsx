import { Link } from 'react-router-dom';
import { useCartState, useLoginState } from '../../state';
import { ReactComponent as Logo } from '../../assets/opencart.svg';
import CartLink from './CartLink';

import SignUp from './SignUp';
import SignIn from './SignIn';
import User from './User';

const Header = () => {
  const { getCartParams } = useCartState();
  const { user } = useLoginState();

  const { cartSize } = getCartParams();

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
          </Link>
          <span className="d-flex gap-3 align-items-center">
            <User />
            {user ? (
              <>
                <SignUp />
                <CartLink cartSize={cartSize} />
              </>
            ) : (
              <SignIn />
            )}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
