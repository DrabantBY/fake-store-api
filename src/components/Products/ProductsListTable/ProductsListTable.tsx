import { ProductInterface } from '../../../type';
import ProductsRow from './ProductsRow';

const ProductsListTable = (props: { productsByFilters: ProductInterface[] }) => {
  const { productsByFilters } = props;

  return (
    <div className="table-responsive">
      <table className="table caption-top table-striped table align-middle">
        <caption className="fs-4">List of products</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">view</th>
            <th scope="col">title</th>
            <th scope="col">rating</th>
            <th scope="col">price</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {productsByFilters.map((product) => (
            <ProductsRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsListTable;
