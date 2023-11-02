// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isNumeric = (value: any) => {
  const numericRegex = /^[0-9]+$/;
  return numericRegex.test(value);
};

export default isNumeric;
