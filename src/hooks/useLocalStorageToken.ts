import { useState, useEffect } from 'react';

type Nullable<T> = T | null;

interface HookMethods<P> {
  setItem: (value: P) => void;
  removeItem: () => void;
}

function getLocalStorageValue<P>(key: string): Nullable<P> {
  const savedValue = localStorage.getItem(key);
  if (savedValue) {
    return JSON.parse(savedValue);
  }
  return null;
}

export function useLocaStorageToken<P>(
  key: string
): [Nullable<P>, HookMethods<P>] {
  const [value, setValue] = useState<Nullable<P>>(() =>
    getLocalStorageValue(key)
  );

  useEffect(() => {
    // ocoбенность реализации - в LS не может лежать null в качестве сериализованного значения, альтернатива - создание рефа на первый рендер и использование хука useUpdateEffect для незаписи null в LS при первой отработке useEffect после монтирования
    if (value !== null) localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  const removeItem = () => {
    setValue(null);
    localStorage.removeItem(key);
  };
  const setItem = (value: P) => {
    setValue(value);
  };

  return [
    value,
    {
      setItem,
      removeItem,
    },
  ];
}
