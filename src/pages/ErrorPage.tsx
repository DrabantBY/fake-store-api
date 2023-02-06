import { ReactComponent as IconError } from '../assets/exclamation-triangle.svg';

const ErrorPage = () => (
  <h2 className="text-danger d-flex align-items-center justify-content-center gap-2 fw-bold fs-1">
    <IconError width={50} height={50} />
    page not found
  </h2>
);

export default ErrorPage;
