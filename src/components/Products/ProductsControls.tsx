import { Link, useNavigate } from 'react-router-dom';
import useHandleAddCartItem from '../../hooks/useHandleAddCartItem';
import useLoginState from '../../hooks/useLoginState';
import { ReactComponent as IconEye } from '../../assets/eye.svg';
import { ReactComponent as IconCartCheck } from '../../assets/cart-check.svg';
import { ReactComponent as IconCartX } from '../../assets/cart-x.svg';
import { ProductInterface } from '../../types';

const ProductsControls = (props: { product: ProductInterface }) => {
  const { product } = props;
  const [isCartItem, setCartItem] = useHandleAddCartItem(product);
  const { user } = useLoginState();
  const navigate = useNavigate();

  return (
    <div className="btn-group">
      <Link
        className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center"
        to={`products/${product.id}`}>
        <IconEye />
      </Link>
      <button
        type="button"
        className={`btn btn-${
          isCartItem && user ? 'success' : 'primary'
        } d-inline-flex justify-content-center align-items-center`}
        onClick={() => {
          if (user) {
            setCartItem();
          } else {
            navigate('/login');
          }
        }}>
        {isCartItem && user ? <IconCartX /> : <IconCartCheck />}
      </button>
    </div>
  );
};

export default ProductsControls;
