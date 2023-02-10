import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import Spinner from '@components/Products/Spinner';
import FormOrder from './FormOrder';
import type { UserOrderInterface } from '@/types';

const Order = () => {
  const { response } = useLoaderData() as { response: Promise<UserOrderInterface> };
  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={response}>{(data: UserOrderInterface) => <FormOrder user={data} />}</Await>
    </Suspense>
  );
};

export default Order;
