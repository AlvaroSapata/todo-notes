// Custom React hook that provides a way to manage state that is synchronized with localStorage. This means that the state persists across page reloads.
import { useEffect, useState } from "react";

// The initial state value. It can either be a value of type T or a function that returns a value of type T.
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // State Initialization
  const [value, setValue] = useState<T>(() => {
    // The initial state is determined by a function thet tries to retrieve the value associated with the given key from localStorage, If no value is found It checks if initialValue is a function. If so, it calls this function to get the initial state, Otherwise, it uses initialValue directly. If a value is found, it parses the JSON string to get the initial state.
    const jsonValue = localStorage.getItem(key);
    if (jsonValue == null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      } else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue);
    }
  });
  // Effect to Sync with localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  // The return type is explicitly specified as a tuple (fixed number of elements)
  return [value, setValue] as [T, typeof setValue];
}
