/* eslint-disable react/prop-types */
import ProductControls from './ProductControls';

import type { ProductInterface } from '../../type';

const ProductsItem: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;
  // const style = { '--rating': { rating } } as React.CSSProperties;

  return (
    <div className="col">
      <div className="card shadow">
        <div style={{ width: '100%', height: '200px' }} className="overflow-hidden">
          <img
            src={thumbnail}
            className="card-img-top border rounded object-fit-cover"
            alt="thumbnail"
          />
        </div>
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="d-flex align-items-center justify-content-between">
            <span className="card-text">{price}$</span>
            <ProductControls product={product} />
          </div>
          {/* <div className="stars" style={style} aria-label="rating" /> */}
          <p className="card-text">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
