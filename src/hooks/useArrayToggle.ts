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
): [string | boolean, (...args: StringBooleanArrType) => void] {
  const dataArray = makeInitialArray(array);

  const [index, setIndex] = useState(0);

  const toggle = (...args: StringBooleanArrType) => {
    if (args.length === 0 || !!args) {
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
