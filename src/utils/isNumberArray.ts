// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumberArray = (item: any): boolean =>
  Array.isArray(item) && item.every((i) => typeof i === 'number')
    ? true
    : false;

export default isNumberArray;
