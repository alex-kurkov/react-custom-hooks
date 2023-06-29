import { useViewportSize } from "./hooks/useViewportSize";

export function DemoResize() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
