import { useLocaStorageToken } from "./hooks/useLocalStorageToken";

export function DemoLS() {
  const [token, { setItem, removeItem }] = useLocaStorageToken<string>('token');

  return (
    <div>
      <p>Твой токен: {token}</p>
      <div>
        <button onClick={() => setItem('new-token')}>Задать токен</button>
        <button onClick={() => removeItem()}>Удалить токен</button>
      </div>
    </div>
  );
}
