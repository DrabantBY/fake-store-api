/* eslint-disable react/prop-types */
import ProductControls from './ProductControls';
import type { ProductInterface } from '../../type';

const ProductsRow: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;

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
      <td>{rating}</td>
      <td>{price}$</td>
      <td>
        <ProductControls product={product} />
      </td>
    </tr>
  );
};
export default ProductsRow;
