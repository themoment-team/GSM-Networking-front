/* eslint-disable @typescript-eslint/no-explicit-any */

const deepCopy = (object: any) => {
  if (object === null || typeof object !== 'object') {
    return object;
  }

  const copy: any = Array.isArray(object) ? [] : {};

  for (const key of Object.keys(object)) {
    copy[key] = deepCopy(object[key]);
  }

  return copy;
};

export default deepCopy;
