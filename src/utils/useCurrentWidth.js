// idea from https://usehooks.com/useWindowSize/
import { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';

function useCurrentWidth() {
  const isClient = typeof window === 'object';

  // use useCallback to avoid errors
  const widthCallback = useCallback(
    // if server render, returns undefined
    () => (isClient ? window.innerWidth : undefined),
    [isClient]
  );

  // store value on state
  const [currentWidth, setCurrentWidth] = useState(widthCallback);

  // handle resizes
  useEffect(() => {
    if (!isClient) return false;

    const handleResize = debounce(() => {
      setCurrentWidth(widthCallback());
    }, 150);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, widthCallback]);

  // return width as number
  return currentWidth;
}

export default useCurrentWidth;
