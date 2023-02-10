import { ActionFunction } from 'react-router-dom';
import deleteUser from '@api/deleteUser';

const actionMakeOrder: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const { method } = request;
  const userId = formData.get('userId');
  const { firstName, lastName } = await deleteUser(Number(userId), method);
  return { firstName, lastName };
};

export default actionMakeOrder;
