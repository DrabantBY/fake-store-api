import { useState, useEffect, useRef } from 'react';
import useHandleChangeValue from '../../../hooks/useHandleChangeValue';
import getCategories from '../../../api/getCategories';

const SelectCategory = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectValue, handleSelectValue] = useHandleChangeValue('category', '');
  const ref = useRef(true);

  useEffect(() => {
    if (ref.current) {
      getCategories().then(setCategories);
      ref.current = !ref.current;
    }
  }, []);

  return (
    <select
      className="form-select mb-3"
      aria-label="sort by price and rating"
      value={selectValue}
      onChange={handleSelectValue}>
      <option value="">all goods</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SelectCategory;
