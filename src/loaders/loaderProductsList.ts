import { defer, LoaderFunction } from 'react-router-dom';
import getProductsList from '@api/getProductsList';

const loaderProductsList: LoaderFunction = async () => {
  return defer({ response: getProductsList() });
};

export default loaderProductsList;
