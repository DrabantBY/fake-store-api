import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartState from '../../state';
import { ReactComponent as IconEye } from '../../assets/eye.svg';
import { ReactComponent as IconCartCheck } from '../../assets/cart-check.svg';
import { ReactComponent as IconCartX } from '../../assets/cart-x.svg';
import { ProductInterface } from '../../type';

const ProductsControls = (props: { product: ProductInterface }) => {
  const { product } = props;
  const [removeCartItem, addCartItem, isCartItem] = useCartState((state) => [
    state.removeCartItem,
    state.addCartItem,
    state.isCartItem,
  ]);

  const [state, setState] = useState(isCartItem(product.id));

  const handleClick = () => {
    if (state) {
      removeCartItem(product.id);
    } else {
      addCartItem(product);
    }
    setState(!state);
  };

  return (
    <div className="btn-group">
      <Link
        className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center"
        to={`products/${product.id}`}>
        <IconEye />
      </Link>

      <button
        type="button"
        className="btn btn-primary d-inline-flex justify-content-center align-items-center"
        onClick={handleClick}>
        {state ? <IconCartX /> : <IconCartCheck />}
      </button>
    </div>
  );
};

export default ProductsControls;
