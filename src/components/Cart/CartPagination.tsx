import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useCartState from '../../state';

const CartPagination = () => {
  const { cartState } = useCartState();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page') ?? 1);
  const currentTotal = Number(searchParams.get('total') ?? 3);

  const length = Math.ceil(cartState.length / currentTotal);

  const handleClick = (value: number) => {
    searchParams.set('page', `${value}`);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (length < currentPage) {
      searchParams.set('page', `${currentPage - 1}`);
      setSearchParams(searchParams);
    }
  }, [currentPage, length, searchParams, setSearchParams]);

  return (
    <div className="btn-group">
      {Array.from({ length }, (_, index) => (
        <button
          key={index}
          type="button"
          className={`btn btn-outline-primary${currentPage === index + 1 ? ' active' : ''}`}
          onClick={() => handleClick(index + 1)}>
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default CartPagination;
