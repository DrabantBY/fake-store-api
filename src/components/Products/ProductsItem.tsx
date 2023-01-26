/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import type { ProductInterface } from '../../type';

const ProductsItem: React.FC<{ product: ProductInterface }> = ({ product }) => {
  const { id, title, price, rating, thumbnail } = product;

  return (
    <li>
      <figure>
        <img src={thumbnail} alt="" />
      </figure>
      <h2>{title}</h2>
      <p>{rating}</p>
      <p>{price}$</p>
      <Link to={`${id}`}>details</Link>
      <button type="button"> add to cart</button>
    </li>
  );
};

export default ProductsItem;
