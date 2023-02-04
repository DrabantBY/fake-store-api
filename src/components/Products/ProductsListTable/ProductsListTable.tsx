import { ProductInterface } from '../../../types';
import ProductsListRow from '../ProductsListRow';
import TableHeaders from '../TableHeaders';
import TableBody from './TableBody';

const ProductsListTable = (props: { productsByFilters: ProductInterface[] }) => {
  const { productsByFilters } = props;

  return (
    <div className="table-responsive">
      <table className="table table-striped table align-middle">
        <TableHeaders />
        <TableBody products={productsByFilters} />
      </table>
    </div>
  );
};

export default ProductsListTable;
