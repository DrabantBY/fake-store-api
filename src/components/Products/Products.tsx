import { Outlet } from 'react-router-dom';

import Categories from './Categories';

const Products = () => {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  );
};

export default Products;
