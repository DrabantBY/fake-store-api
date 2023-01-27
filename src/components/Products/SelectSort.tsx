import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const SelectSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(searchParams.get('sort') ?? '');

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const { value } = e.target;

    setSort(value);

    if (value) {
      searchParams.set('sort', value);
    } else {
      searchParams.delete('sort');
    }

    setSearchParams(searchParams);
  };

  return (
    <select
      className="form-select mb-3"
      aria-label="sort by price and rating"
      onChange={handleChange}
      value={sort}>
      <option value="">sort by default</option>
      <option value="rating-asc">sort by rating asc</option>
      <option value="rating-desc">sort by rating desc</option>
      <option value="price-asc">sort by price asc</option>
      <option value="price-desc">sort by price desc</option>
    </select>
  );
};

export default SelectSort;
