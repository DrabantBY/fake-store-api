import { useSearchParams } from 'react-router-dom';
import { ReactComponent as IconArrowPrev } from '../../assets/arrow-left-square.svg';
import { ReactComponent as IconArrowNext } from '../../assets/arrow-right-square.svg';

const ProductsPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = Number(searchParams.get('skip') ?? 0);
  const pageNumber = skip / 8 + 1;

  const handleClick = (step: 8 | -8) => {
    const nextSkip = skip + step;

    searchParams.set('skip', `${nextSkip}`);

    setSearchParams(searchParams);
  };

  return (
    <div className="d-grid">
      <div className="btn-group">
        <button
          disabled={pageNumber === 1}
          type="button"
          className="btn btn-outline-primary p-1"
          onClick={() => handleClick(-8)}>
          <IconArrowPrev width={25} height={25} />
        </button>
        <button type="button" className="btn btn-primary">
          {pageNumber}
        </button>
        <button
          disabled={pageNumber === 13}
          type="button"
          className="btn btn-outline-primary p-1"
          onClick={() => handleClick(8)}>
          <IconArrowNext width={25} height={25} />
        </button>
      </div>
    </div>
  );
};

export default ProductsPagination;
