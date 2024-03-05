import { useState, useEffect } from 'react';

// ----------------------------------------------------------------------------------------------------

export default function useOffset(top = 100) {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    const handleScroll = window.addEventListener('scroll', () => {
      if (window.scrollY > top) {
        setIsOffset(true);
      } else {
        setIsOffset(false);
      }
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [top]);

  return isOffset;
}
