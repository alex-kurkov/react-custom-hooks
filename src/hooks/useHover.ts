import { useEffect, useRef, useState } from 'react';

export function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const mouseEnterListener = () => {
      setHovered(true);
    };
    const mouseLeaveListener = () => {
      setHovered(false);
    };

    const element = ref.current;

    if (element) {
      element.addEventListener('mouseenter', mouseEnterListener);
      element.addEventListener('mouseleave', mouseLeaveListener);
    }
    
    return () => {
      element?.removeEventListener('mouseenter', mouseEnterListener);
      element?.removeEventListener('mouseleave', mouseLeaveListener);
    };
  }, []);

  return { hovered, ref };
}
