const URL = "https://dummyjson.com/products";

export const fetchProduct = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};
