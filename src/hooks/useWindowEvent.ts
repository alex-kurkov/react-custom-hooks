import { useEffect } from 'react';

export function useWindowEvent(type: keyof WindowEventMap, listener: EventListener, options?: boolean | AddEventListenerOptions ) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener, options]);
}
