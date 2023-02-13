import { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from '@helpers/debounce';

const useHandleChangeValue = (
  queryParam: string,
  initValue: string | number
): [string | number, (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [stateChangeValue, setStateChangeValue] = useState<string | number>(''); // searchParams.get(queryParam) ?? initValue

  useEffect(() => {
    setStateChangeValue(searchParams.get(queryParam) ?? initValue);
  }, [initValue, queryParam, searchParams]);

  const debounceSetSearchParams = useMemo(() => debounce(setSearchParams, 300), [setSearchParams]);

  const handleChangeValue: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement> = (e) => {
    const value = e.target.value.trim().toLocaleLowerCase();
    setStateChangeValue(value);

    if (value) {
      searchParams.set(queryParam, value);
    } else {
      searchParams.delete(queryParam);
    }

    if (queryParam !== 'sort' && queryParam !== 'view') {
      searchParams.delete('page');
    }

    debounceSetSearchParams(searchParams);
  };

  return [stateChangeValue, handleChangeValue];
};

export default useHandleChangeValue;
