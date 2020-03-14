// idea from https://usehooks.com/useWindowSize/
// https://medium.com/@Jense5_/use-document-and-window-with-gatsby-e9a92ee31f36
import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { document } from 'browser-monads';

function useDocumentSize() {
  const getSize = () => ({
    width: document.body.clientWidth,
    height: document.body.clientHeight,
  });

  const [sizes, setSizes] = useState(getSize);

  // handle resizes
  useEffect(() => {
    // set sizes again after render (height is 0 the first time)
    setSizes(getSize());

    // handle resizes
    const handleResize = debounce(() => {
      setSizes(getSize());
    }, 150);
    document.addEventListener('resize', handleResize);
    return () => document.removeEventListener('resize', handleResize);
  }, []);

  // return sizes as object
  return sizes;
}

export default useDocumentSize;
