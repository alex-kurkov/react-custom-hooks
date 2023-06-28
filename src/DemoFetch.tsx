import { useFetch } from "./hooks/useFetch";

export function DemoFetch() {
  const { data, isLoading, error, refetch } = useFetch<
    Array<{ id: number | string; title: string }>
  >('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}
