import { useNavigate } from 'react-router-dom';
import { ProductInterface } from '../../type';

const ProductsItemCard = (props: { product: ProductInterface }) => {
  const { product } = props;
  const { id, title, description, rating, brand, category, price } = product;

  const navigate = useNavigate();

  const style = { '--rating': rating } as React.CSSProperties;

  return (
    <div className="card border-primary ">
      <div className="card-header fs-4 text-primary">
        #{id} {title}
      </div>
      <div className="card-body fs-5 fw-bold">{description}</div>
      <ul className="list-group list-group-flush fs-5">
        <li className="list-group-item">
          Brand: <span className="text-decoration-underline text-primary">{brand}</span>
        </li>
        <li className="list-group-item">
          Category: <span className="text-decoration-underline text-primary">{category}</span>
        </li>
        <li className="list-group-item">
          Price: <span className="badge bg-primary rounded-pill fs-6">{price} $</span>
        </li>
        <li className="list-group-item stars" style={style}>
          &nbsp;{rating}
        </li>
      </ul>
      <div className="card-footer btn-group">
        <button type="button" className="btn btn-outline-primary" onClick={() => navigate(-1)}>
          go back
        </button>
        <button type="button" className="btn btn-outline-primary">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsItemCard;
