import { useSearchParams } from 'react-router-dom';

const ResetFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    if (!searchParams.toString()) return;

    ['search', 'sort', 'minPrice', 'maxPrice', 'minRating', 'maxRating', 'view'].forEach((key) => {
      if (searchParams.has(key)) {
        searchParams.delete(key);
      }
    });

    setSearchParams(searchParams);
  };

  return (
    <div className="d-grid">
      <button type="button" className="btn btn-outline-primary d-grid" onClick={handleClick}>
        Reset Filters
      </button>
    </div>
  );
};

export default ResetFilters;
