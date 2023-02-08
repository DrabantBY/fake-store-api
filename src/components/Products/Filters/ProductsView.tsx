import { useSearchParams } from 'react-router-dom';
import { ReactComponent as IconBlock } from '@assets/grid.svg';
import { ReactComponent as IconTable } from '@assets/list.svg';

const ProductsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isBlock = (searchParams.get('view') ?? 'block') === 'block';

  const handleClick = (state: 'block' | 'table') => {
    if ((isBlock && state === 'block') || (!isBlock && state === 'table')) return;
    searchParams.set('view', state);
    setSearchParams(searchParams);
  };

  return (
    <div className="d-grid mb-3">
      <div className="btn-group">
        <button
          type="button"
          className={`btn btn-outline-primary${isBlock ? ' active' : ''}`}
          onClick={() => handleClick('block')}>
          <IconBlock className="mb-1" />
        </button>
        <button
          type="button"
          className={`btn btn-outline-primary${isBlock ? '' : ' active'}`}
          onClick={() => handleClick('table')}>
          <IconTable className="mb-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductsView;
