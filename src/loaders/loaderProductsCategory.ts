import { defer, LoaderFunction } from 'react-router-dom';
import getProductsCategory from '../api/getProductsCategory';

const loaderProductsCategory: LoaderFunction = async ({ params }) => {
  const { category } = params as { category: string };

  return defer({ response: getProductsCategory(category) });
};

export default loaderProductsCategory;
