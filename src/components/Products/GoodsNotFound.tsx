import { ReactComponent as IconInfo } from '../../assets/info-circle.svg';

const GoodsNotFound = () => (
  <div className="d-flex align-items-center justify-content-center gap-3 mt-5">
    <IconInfo fill="#0d6efd" width={40} height={40} />
    <h2 className="display-4 text-primary">Goods not found</h2>
  </div>
);

export default GoodsNotFound;
