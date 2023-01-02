import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler, isOpen) => {
  useEffect(() => {
    // console.log('!isOpen', !isOpen);
    if (!isOpen) return;
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler, isOpen]);
};
