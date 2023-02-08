import type { ProductInterface } from '@/types';
import TableHeaders from '../TableHeaders';
import TableBody from './TableBody';

const ProductsListTable = ({ productsByFilters }: { productsByFilters: ProductInterface[] }) => {
  return (
    <div className="table-responsive mb-3">
      <table className="table table-striped table align-middle">
        <TableHeaders />
        <TableBody products={productsByFilters} />
      </table>
    </div>
  );
};

export default ProductsListTable;
