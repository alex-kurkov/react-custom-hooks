import { useEffect, useRef } from "react";

export function useUpdateEffect(callback: () => any, deps: unknown[]) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    } 
    return callback();
  }, deps)
}
