import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as IconStar } from '../../assets/star-fill.svg';
import type { RangeFilterDataType } from '../../type';

const RangeFilter = (props: RangeFilterDataType) => {
  const { min, max, step, rangeId, init } = props;

  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get(rangeId) ?? init);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setState(value);
    searchParams.set(rangeId, value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <label htmlFor={rangeId} className="form-label align-items-center d-flex gap-1">
        {rangeId}:&nbsp;{state}
        {rangeId.endsWith('Price') ? '$' : <IconStar fill="gold" />}
      </label>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        step={step}
        id={rangeId}
        value={state}
        onChange={handleChange}
      />
    </>
  );
};

export default RangeFilter;
