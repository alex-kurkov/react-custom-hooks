import { useArrayToggle } from "./hooks/useArrayToggle";

export function DemoToggle() {
  const [value, toggle] = useArrayToggle(['blue', 'orange', 'cyan', 'teal']);

  return <button onClick={() => toggle()}>{value.toString()}</button>;
}
