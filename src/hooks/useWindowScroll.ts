import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';
type Coords = { x: number; y: number };

export function useWindowScroll(): [Coords, (c: Partial<Coords>) => void] {
  const [scroll, setScroll] = useState<Coords>({ x: 0, y: 0 });

  const scrollTo = (coords: Partial<Coords>) => {
    const newCoords = {
      x: coords.x ?? scroll.x,
      y: coords.y ?? scroll.y,
    };

    window.scrollTo(newCoords.x, newCoords.y);
  };

  useWindowEvent('scroll', () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  });


  return [scroll, scrollTo];
}
