/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { ReactComponent as IconEye } from '../../assets/eye.svg';
import { ReactComponent as IconCartCheck } from '../../assets/cart-check.svg';
import { ReactComponent as IconCartX } from '../../assets/cart-x.svg';

import type { ProductInterface } from '../../type';

const ProductsItem: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;
  // const style = { '--rating': { rating } } as React.CSSProperties;

  return (
    <div className="col">
      <div className="card shadow">
        <img src={thumbnail} className="card-img-top border rounded" alt="card" />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{price}$</p>
          {/* <div className="stars" style={style} aria-label="rating" /> */}
          <p className="card-text">{rating}</p>
          <Link
            className="btn btn-outline-secondary me-1 d-inline-flex justify-content-center align-items-center"
            to={`products/${id}`}>
            <IconEye />
          </Link>
          <button
            type="button"
            className="btn btn-outline-secondary d-inline-flex justify-content-center align-items-center">
            <IconCartCheck />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
