import { LoaderFunction } from 'react-router-dom';
import getProductsList from '../api/getProductsList';

const loaderProductsList: LoaderFunction = async () => {
  const products = await getProductsList();
  return products;
};

export default loaderProductsList;
