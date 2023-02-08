import { useSearchParams } from 'react-router-dom';
import { ReactComponent as IconArrowPrev } from '@assets/arrow-left-square.svg';
import { ReactComponent as IconArrowNext } from '@assets/arrow-right-square.svg';

const ProductsPagination = ({ page, pageNumber }: { page: number; pageNumber: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = (step: 1 | -1) => {
    const nextPage = page + step;
    searchParams.set('page', `${nextPage}`);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="btn-group">
        <button
          disabled={page === 1}
          type="button"
          className="btn btn-outline-primary p-1"
          onClick={() => handleClick(-1)}>
          <IconArrowPrev width={25} height={25} />
        </button>
        <button type="button" className="btn btn-primary">
          {page} / {pageNumber}
        </button>
        <button
          disabled={page === pageNumber}
          type="button"
          className="btn btn-outline-primary p-1"
          onClick={() => handleClick(1)}>
          <IconArrowNext width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default ProductsPagination;
