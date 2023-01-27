import { Outlet } from 'react-router-dom';
import Categories from './Categories';
import RangeFilter from './RangeFilter';
import SearchForm from './SearchForm';
import SelectSort from './SelectSort';

const Products = () => {
  return (
    <main>
      <section className="container">
        <div className="row">
          <div className="col-5 col-sm-4 col-lg-2">
            <SearchForm />
            <Categories />
            <SelectSort />
            <RangeFilter min={0} max={5} step={0.01} rangeId="minRating" init={0} />
            <RangeFilter min={0} max={5} step={0.01} rangeId="maxRating" init={5} />
            <RangeFilter min={20} max={800} step={5} rangeId="minPrice" init={20} />
            <RangeFilter min={20} max={800} step={5} rangeId="maxPrice" init={800} />
          </div>
          <div className="col-7 col-sm-8 col-lg-10">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
