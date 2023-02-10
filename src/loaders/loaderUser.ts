import { defer, LoaderFunction } from 'react-router-dom';
import getUser from '@api/getUser';

const loaderUser: LoaderFunction = async ({ params }) => {
  const { id } = params;

  return defer({ response: getUser(Number(id)) });
};

export default loaderUser;
