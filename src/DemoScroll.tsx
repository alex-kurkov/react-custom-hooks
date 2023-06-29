import { useWindowScroll } from "./hooks/useWindowScroll";

export function DemoScroll() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
