import { LoaderFunction } from 'react-router-dom';
import getProductsCategory from '../api/getProductsCategory';

const loaderProductsCategory: LoaderFunction = async ({ params }) => {
  const { category } = params;
  if (!category) return [];
  const products = await getProductsCategory(category);
  return products;
};

export default loaderProductsCategory;
