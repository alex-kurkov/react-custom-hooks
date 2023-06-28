import { useState } from "react";

export function useToggle(defaultValue: boolean) {
  const [state, setState] = useState<boolean>(defaultValue);

  function toggleValue(value: unknown) {
    setState((prev) => {
      return typeof value === 'boolean' ? value : !prev  
    })
  }

  return [state, toggleValue]
}
