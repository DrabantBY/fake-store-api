import { useRouteError } from 'react-router-dom';
import { ReactComponent as IconError } from '@assets/exclamation-triangle.svg';

const Error = () => {
  const error = useRouteError() as Response;
  return (
    <h2 className="text-danger d-flex align-items-center justify-content-center gap-2 fw-bold fs-1">
      {error?.status ?? ''} <IconError width={50} height={50} />
      {error?.statusText ?? 'Something went wrong'}
    </h2>
  );
};

export default Error;
