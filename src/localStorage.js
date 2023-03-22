export const getItem = (apiKey) => {
  const item = localStorage.getItem(apiKey);
  return JSON.parse(item);
};

export const setItem = (apiKey, item) => {
  localStorage.setItem(apiKey, JSON.stringify(item));
};
