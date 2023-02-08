import { defer, LoaderFunction } from 'react-router-dom';
import getProductsItem from '@api/getProductsItem';

const loaderProductsItem: LoaderFunction = async ({ params }) => {
  const { id } = params as { id: string };

  return defer({ response: getProductsItem(Number(id)) });
};

export default loaderProductsItem;
