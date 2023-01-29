import { Link } from 'react-router-dom';
import { ReactComponent as IconEye } from '../../assets/eye.svg';
import { ReactComponent as IconCartCheck } from '../../assets/cart-check.svg';
import { ReactComponent as IconCartX } from '../../assets/cart-x.svg';
import { ProductInterface } from '../../type';

const ProductsControls = (props: { product: ProductInterface }) => {
  const { product } = props;
  return (
    <div className="btn-group">
      <Link
        className="btn btn-outline-primary d-inline-flex justify-content-center align-items-center"
        to={`products/${product.id}`}>
        <IconEye />
      </Link>

      <button
        type="button"
        className="btn btn-primary d-inline-flex justify-content-center align-items-center">
        <IconCartCheck />
      </button>
    </div>
  );
};

export default ProductsControls;
