import { ChangeEvent } from 'react';

const debounce = (
  func: React.ChangeEventHandler<HTMLSelectElement | HTMLInputElement>,
  time: number
) => {
  let timer: ReturnType<typeof setTimeout>;

  return function noname(
    this: unknown,
    ...args: [ChangeEvent<HTMLSelectElement | HTMLInputElement>]
  ) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), time);
  };
};

export default debounce;
