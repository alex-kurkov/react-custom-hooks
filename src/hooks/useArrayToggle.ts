import { useState } from 'react';

function makeInitialArray<T>(arr?: T[]): T[] {
  if (Array.isArray(arr) && arr.length) {
    return arr;
  }
  if (!!arr && !Array.isArray(arr)) {
    console.error(
      `переданный в хук аргумент ${arr} должен быть либо массивом, либо отсутствовать. Будут применены дефолтные значения: [true, false]`
    );
  }
  return [true, false] as T[];
}

export function useArrayToggle<T extends string | boolean>(
  array?: T[]
): [T, (...args: T[]) => void] {
  const dataArray = makeInitialArray<T>(array);

  const [index, setIndex] = useState(0);

  const toggle = (...args: T[]) => {
    if (args.length === 0) {
      setIndex((p) => (p + 1 === dataArray.length ? 0 : p + 1));
      return;
    }

    const nextIndex = dataArray.indexOf(args[0]);
    if (nextIndex === -1) {
      console.error(
        `the value of "${args[0]}" is not present in array: ${dataArray}`
      );
    } else {
      setIndex(nextIndex);
    }
  };

  return [dataArray[index], toggle];
}
