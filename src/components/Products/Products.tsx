import SelectCategory from './Filters/SelectCategory';
import ProductsView from './Filters/ProductsView';
import RangeFilter from './Filters/RangeFilter';
import ResetFilters from './Filters/ResetFilters';
import SearchForm from './Filters/SearchForm';
import SelectSort from './Filters/SelectSort';
import ProductsList from './ProductsList';
import ProductsPagination from './ProductsPagination';

const Products = () => {
  return (
    <main>
      <section className="container">
        <div className="row">
          <div className="col-5 col-sm-4 col-lg-2">
            <SearchForm />
            <SelectCategory />
            <SelectSort />
            <div className="list-group mb-3">
              <div className="list-group-item">
                <RangeFilter min={0} max={5} step={0.01} rangeId="minRating" init={0} />
                <RangeFilter min={0} max={5} step={0.01} rangeId="maxRating" init={5} />
              </div>
              <div className="list-group-item">
                <RangeFilter min={10} max={1750} step={10} rangeId="minPrice" init={10} />
                <RangeFilter min={10} max={1750} step={10} rangeId="maxPrice" init={1750} />
              </div>
            </div>
            <ProductsView />
            <ResetFilters />
            <ProductsPagination />
          </div>
          <div className="col-7 col-sm-8 col-lg-10">
            <ProductsList />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
