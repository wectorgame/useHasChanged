import { useEffect, useRef } from 'react';

// https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect
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
