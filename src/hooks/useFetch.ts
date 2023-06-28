import { useCallback, useEffect, useState } from 'react';

type Nullable<T> = T | null;
const REQUEST_LIMIT = 1;

export function useFetch<Data>(url: string) {
  const [requestLimitLeft, setRequestLimitLeft] = useState(REQUEST_LIMIT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState<Nullable<Data>>(null);

  const request = useCallback(async () => {
    setIsLoading(true);
    setError(false);
    setData(null);

    await fetch(url)
      .then((res) => {
        if (!res.ok) {
          // обработка ошибок - для упрощения просто пока по полю ok без проброса далее сообщений об ошибках сервера
          throw new Error('request failed');
        }
        return res.json() as Promise<Data>;
      })
      .then((data) => {
        setData(data);
        setRequestLimitLeft(0);
      })
      .catch(() => {
        setError(true);
        setRequestLimitLeft((prev) => (prev > 0 ? prev - 1 : 0));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  const refetch = (
    options = {
      params: {
        _limit: REQUEST_LIMIT,
      },
    }
  ) => {
    setRequestLimitLeft(Math.abs(options.params._limit));
  };

  useEffect(() => {
    if (requestLimitLeft === 0) {
      return;
    }
    request();
  }, [requestLimitLeft, url, request]);

  return { data, isLoading, error, refetch };
}
