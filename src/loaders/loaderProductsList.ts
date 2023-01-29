import { defer, LoaderFunction } from 'react-router-dom';
import getProductsList from '../api/getProductsList';

const loaderProductsList: LoaderFunction = async ({ request }) => {
  const { url } = request;
  const { search } = new URL(url);
  const searchParams = new URLSearchParams(search);
  const skip = Number(searchParams.get('skip') ?? 0);
  return defer({ response: getProductsList(skip) });
};

export default loaderProductsList;
