const debounce = (func: (searchParams: URLSearchParams) => void, time: number) => {
  let timer: ReturnType<typeof setTimeout>;

  return function noname(this: unknown, arg: URLSearchParams) {
    clearTimeout(timer);
    timer = setTimeout(() => func.call(this, arg), time);
  };
};

export default debounce;
