import useHandleChangeValue from '../../../hooks/useHandleChangeValue';

const SelectSort = () => {
  const [selectValue, handleSelectValue] = useHandleChangeValue('sort', '');

  return (
    <select
      className="form-select mb-3"
      aria-label="sort by price and rating"
      value={selectValue}
      onChange={handleSelectValue}>
      <option value="">sort by default</option>
      <option value="rating-asc">sort by rating asc</option>
      <option value="rating-desc">sort by rating desc</option>
      <option value="price-asc">sort by price asc</option>
      <option value="price-desc">sort by price desc</option>
    </select>
  );
};

export default SelectSort;
