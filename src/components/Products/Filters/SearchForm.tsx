import useHandleChangeValue from '@hooks/useHandleChangeValue';

const SearchForm = () => {
  const [searchValue, handleSearchValue] = useHandleChangeValue('search', '');

  return (
    <input
      type="search"
      name="search"
      className="form-control mb-3"
      placeholder="search"
      aria-label="search"
      aria-describedby="search"
      value={searchValue}
      onChange={handleSearchValue}
    />
  );
};
export default SearchForm;
