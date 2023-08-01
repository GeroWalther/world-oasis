import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(() => {
    function handleClick(e) {
      //we close it if it the ref does not contains the target of the click event = clicked outside
      // e.target = element where click happened
      // ref.current = domElement we put the ref on
      // on domElements we can call contains - which returns true whenever the ref.current contains the element passed in. (e.target)
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    // we need true as a third argument if we want to catch the click event when it moves down (capturing face) and not in the bubbling up face
    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);
  return ref;
}
