// idea from https://usehooks.com/useWindowSize/
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { window } from 'browser-monads';

function useWindowSize() {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [sizes, setSizes] = useState(getSize);

  // handle resizes
  useEffect(() => {
    const handleResize = debounce(() => {
      setSizes(getSize());
    }, 150);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // return sizes as object
  return sizes;
}

export default useWindowSize;
