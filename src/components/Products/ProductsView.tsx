import { useSearchParams } from 'react-router-dom';
import { ReactComponent as IconBlock } from '../../assets/grid.svg';
import { ReactComponent as IconTable } from '../../assets/list.svg';

const ProductsView = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isBlock = (searchParams.get('view') ?? 'block') === 'block';

  const handleClick = (state: 'block' | 'table') => {
    if ((isBlock && state === 'block') || (!isBlock && state === 'table')) return;
    searchParams.set('view', state);
    setSearchParams(searchParams);
  };

  return (
    <div className="list-group list-group-horizontal">
      <button
        type="button"
        className={`list-group-item list-group-item-action text-center${isBlock ? ' active' : ''}`}
        onClick={() => handleClick('block')}>
        <IconBlock className="mb-1" />
      </button>
      <button
        type="button"
        className={`list-group-item list-group-item-action text-center${isBlock ? '' : ' active'}`}
        onClick={() => handleClick('table')}>
        <IconTable className="mb-1" />
      </button>
    </div>
  );
};

export default ProductsView;
