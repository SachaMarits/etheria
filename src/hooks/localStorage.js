import { useEffect, useState } from "react";

const decode = (value) => {
  return JSON.stringify(value);
};

const encode = (value) => {
  return JSON.parse(value);
};

// useLocalStorage hook
export const useLocalStorage = (key, defaultState) => {
  const [value, setValue] = useState(
    encode(localStorage.getItem(key) || null) || defaultState
  );

  useEffect(() => {
    localStorage.setItem(key, decode(value));
    // eslint-disable-next-line
  }, [value]);

  return [value, setValue];
};
