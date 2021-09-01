import { useEffect, useRef } from 'react';

export const useHasChanged = (val: any, skipUndefined?: boolean) => {
  const prevVal = usePrevious(val);
  if (prevVal === undefined && skipUndefined) return false;
  return prevVal !== val;
};

const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
