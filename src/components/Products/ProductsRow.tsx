import ProductControls from './ProductControls';
import type { ProductInterface } from '../../type';

const ProductsRow = (props: { product: ProductInterface }) => {
  const { product } = props;
  const { id, title, price, rating, thumbnail } = product;
  const style = { '--rating': rating } as React.CSSProperties;
  return (
    <tr>
      <th scope="row">{id}</th>
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
      <td>{title}</td>
      <td>
        <span className="stars d-flex align-items-center gap-2 fs-5" style={style}>
          {rating}
        </span>
      </td>
      <td className="fs-4">{price}$</td>
      <td>
        <ProductControls product={product} />
      </td>
    </tr>
  );
};
export default ProductsRow;
