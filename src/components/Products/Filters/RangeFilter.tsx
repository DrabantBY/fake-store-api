import useHandleChangeValue from '../../../hooks/useHandleChangeValue';
import { ReactComponent as IconStar } from '../../../assets/star-fill.svg';
import type { RangeFilterDataType } from '../../../types';

const RangeFilter = (props: RangeFilterDataType) => {
  const { min, max, step, rangeId, init } = props;

  const [rangeValue, handleRangeValue] = useHandleChangeValue(rangeId, init);

  return (
    <>
      <label htmlFor={rangeId} className="form-label align-items-center d-flex gap-1">
        {rangeId}:&nbsp;{rangeValue}
        {rangeId.endsWith('Price') ? '$' : <IconStar fill="gold" />}
      </label>
      <input
        type="range"
        className="form-range"
        min={min}
        max={max}
        step={step}
        id={rangeId}
        value={rangeValue}
        onChange={handleRangeValue}
      />
    </>
  );
};

export default RangeFilter;
