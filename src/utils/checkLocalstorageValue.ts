const checkLocalstorageValue = (keyName: string) => {
  try {
    return JSON.parse(localStorage.getItem(keyName)!);
  } catch {
    return null;
  }
};

export default checkLocalstorageValue;
