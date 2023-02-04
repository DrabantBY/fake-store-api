import { Link } from 'react-router-dom';
import ProductsControls from '../ProductsControls';
import type { ProductInterface } from '../../../types';

const ProductsListItem = (props: { product: ProductInterface }) => {
  const { product } = props;
  const { id, thumbnail, title, price, rating } = product;
  const style = { '--rating': rating } as React.CSSProperties;

  return (
    <div className="col">
      <div className="card shadow h-100">
        <Link
          to={`products/${id}`}
          style={{ width: '100%', height: '15rem' }}
          className="overflow-hidden border border-primary border-5 border-top-0 border-end-0 border-start-0">
          <img src={thumbnail} className="card-img-top" alt="thumbnail" />
        </Link>
        <div className="card-body d-flex flex-column justify-content-between">
          <h6 className="card-title fs-5">{title}</h6>
          <div className="d-flex align-items-center justify-content-between">
            <span className="card-text fs-5">{price}$</span>
            <ProductsControls product={product} />
          </div>
          <div className="stars d-flex align-items-center gap-2 fs-5" style={style}>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListItem;
