import ProductsControls from '../ProductsControls';

import type { ProductInterface } from '../../../type';

const ProductsItem = (props: { product: ProductInterface }) => {
  const { product } = props;
  const { id, thumbnail, title, price, rating } = product;
  const style = { '--rating': rating } as React.CSSProperties;

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
          <h6 className="card-title fs-5">{title}</h6>
          <div className="d-flex align-items-center justify-content-between">
            <span className="card-text fs-4">{price}$</span>
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

export default ProductsItem;
