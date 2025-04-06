// hooks/useDebounce.js
import { useEffect, useState } from "react";

const useDebounce = (inputValue, delay = 500) => {
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedInputValue;
};

export default useDebounce;
