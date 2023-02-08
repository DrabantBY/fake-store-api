import { Link } from 'react-router-dom';
import ProductsControls from './ProductsControls';
import CartItemsControls from '../Cart/CartItemsControls';
import type { CartItemInterface, ProductInterface } from '@/types';

const ProductsListRow = ({
  product,
  index,
}: {
  product: ProductInterface | CartItemInterface;
  index: number;
}) => {
  const { id, title, price, rating, thumbnail } = product;
  const style = { '--rating': rating } as React.CSSProperties;
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <Link
          to={`/products/${id}`}
          className="rounded-circle overflow-hidden d-block"
          style={{ width: '80px', height: '80px' }}>
          <img
            className="object-fit-cover"
            src={thumbnail}
            alt="thumbnail"
            style={{ width: '100%' }}
          />
        </Link>
      </td>
      <td className="fs-5">{title}</td>
      <td>
        <span className="stars d-flex align-items-center gap-2 fs-5" style={style}>
          {rating}
        </span>
      </td>
      <td className="fs-5">{price}$</td>
      <td>
        {'cart' in product ? <CartItemsControls id={id} /> : <ProductsControls product={product} />}
      </td>
    </tr>
  );
};
export default ProductsListRow;
