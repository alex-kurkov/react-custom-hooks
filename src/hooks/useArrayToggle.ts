import { useState } from 'react';

export function useArrayToggle<T>(
  array: (boolean | T)[] = [true, false]
): [T | boolean, (...args: (T | boolean)[]) => void] {
  const [index, setIndex] = useState(0);

  const toggle = (...args: (T | boolean)[]) => {
    if (args.length === 0) {
      setIndex((p) => (p + 1 === array.length ? 0 : p + 1));
      return;
    }

    const nextIndex = array.indexOf(args[0]);
    if (nextIndex === -1) {
      console.error(
        `the value of "${args[0]}" is not present in array: ${array}`
      );
    } else {
      setIndex(nextIndex);
    }
  };

  return [array[index], toggle];
}
