export const getJsonLs = <T>(key: string, defaultValue?: T) => {
  const item = localStorage.getItem(key);
  return item !== null && item !== undefined
    ? JSON.parse(item)
    : defaultValue ?? null;
};

export const setJsonLs = <T>(key: string, value: T | null) => {
  localStorage.setItem(key, JSON.stringify(value));
};
