import { useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

function getDimensions() {
  // вообще логичнее было бы обращаться не к window, а к clientWidth/Height у documentElement - чтобы скроллбар вычитать - но в задании window)
  return {
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight,
  };
}

export function useViewportSize() {
  const [dimensions, setDimensions] = useState(() => getDimensions());

  useWindowEvent(
    'resize',
    () => {
      setDimensions(getDimensions());
    }
  );

  return {
    ...dimensions,
  };
}
