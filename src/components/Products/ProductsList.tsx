import { useLoaderData, useSearchParams } from 'react-router-dom';
import ProductsItem from './ProductsItem';
import ProductsRow from './ProductsRow';
import useFilterByQueryParams from '../../hooks/useFilterByQueryParams';
import { ReactComponent as IconInfo } from '../../assets/info-circle.svg';
import type { ProductInterface } from '../../type';

const ProductsList = () => {
  const products = useLoaderData() as ProductInterface[];
  const productsByQueryParams = useFilterByQueryParams(products);
  const [searchParams] = useSearchParams();

  if (productsByQueryParams.length === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
        <IconInfo fill="#0d6efd" width={40} height={40} />
        <h2 className="display-4 text-primary">Goods not found</h2>
      </div>
    );
  }

  const isBlock = (searchParams.get('view') ?? 'block') === 'block';

  if (isBlock) {
    return (
      <div className="row row-cols-1 row-cols-lg-4 g-3">
        {productsByQueryParams.map((product) => (
          <ProductsItem key={product.id} product={product} />
        ))}
      </div>
    );
  }

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
          {productsByQueryParams.map((product) => (
            <ProductsRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
