import { useArrayToggle } from "./hooks/useArrayToggle";

export function DemoToggle() {
  const [value, toggle] = useArrayToggle<string>(['blue', 'orange', 'cyan', 'teal']);

  return <button onClick={() => toggle('orangje')}>{value}</button>;
}
