import { useState } from 'react';

type StringBooleanArrType = string[] | boolean[];

function makeInitialArray(arr?: StringBooleanArrType): StringBooleanArrType {
  if (Array.isArray(arr) && arr.length) {
    return arr;
  }
  if (!!arr && !Array.isArray(arr)) {
    console.error(
      `переданный в хук аргумент ${arr} должен быть либо массивом, либо отсутствовать. Будут применены дефолтные значения: [true, false]`
    );
  }
  return [true, false];
}

export function useArrayToggle(
  array?: StringBooleanArrType
): [string | boolean, (...args: unknown[]) => void] {
  const dataArray = makeInitialArray(array);

  const [index, setIndex] = useState(0);

  const toggle = (...args: unknown[]) => {
    if (args.length === 0) {
      setIndex((p) => {
        if (p + 1 === dataArray.length) {
          return 0
        } else {
          return p + 1
        }
      });
      return;
    }

    const nextIndex = dataArray.indexOf(args[0] as never);
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
