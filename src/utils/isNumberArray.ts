const isNumberArray = (item: unknown): boolean =>
  Array.isArray(item) && item.every((i) => typeof i === 'number')
    ? true
    : false;

export default isNumberArray;
