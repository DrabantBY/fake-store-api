import ProductsControls from './ProductsControls';
import CartItemsControls from '../Cart/CartItemsControls';
import type { CartItemInterface, ProductInterface } from '../../types';

const ProductsListRow = (props: {
  product: ProductInterface | CartItemInterface;
  index: number;
}) => {
  const { product, index } = props;
  const { id, title, price, rating, thumbnail } = product;
  const style = { '--rating': rating } as React.CSSProperties;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <div className="rounded-circle overflow-hidden" style={{ width: '80px', height: '80px' }}>
          <img
            className="object-fit-cover"
            src={thumbnail}
            alt="thumbnail"
            style={{ width: '100%' }}
          />
        </div>
      </td>
      <td className="fs-5">{title}</td>
      <td>
        <span className="stars d-flex align-items-center gap-2 fs-5" style={style}>
          {rating}
        </span>
      </td>
      <td className="fs-5">{price}$</td>
      <td>
        {'cart' in product ? (
          <CartItemsControls product={product} />
        ) : (
          <ProductsControls product={product} />
        )}
      </td>
    </tr>
  );
};
export default ProductsListRow;
