import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ReactComponent as IconSearch } from '../../assets/search.svg';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('search') ?? '');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    searchParams.set('search', value.trim().toLowerCase());
    setSearchParams(searchParams);
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        className="form-control"
        placeholder="search"
        aria-label="search"
        aria-describedby="search-submit"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="btn btn-outline-secondary d-inline-flex justify-content-center align-items-center"
        type="submit"
        id="search-submit">
        <IconSearch />
      </button>
    </form>
  );
};
export default SearchForm;
