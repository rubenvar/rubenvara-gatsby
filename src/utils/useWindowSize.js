// idea from https://usehooks.com/useWindowSize/
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { window, exists } from 'browser-monads';

export function useWindowSize() {
  const getSize = () => ({
    width: window?.innerWidth,
    height: window?.innerHeight,
  });

  const [sizes, setSizes] = useState(getSize);

  // handle resizes
  useEffect(() => {
    const handleResize = debounce(() => {
      setSizes(getSize());
    }, 150);

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // return sizes as object if in browser
  // if (!exists(window)) return null;
  return sizes;
}
