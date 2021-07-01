import { useState, useEffect } from 'react'

const useOnScreen = (ref, rootMargin) => {
  if (rootMargin === undefined) {
    rootMargin = 0;
  }
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIntersecting(true);
            observer.unobserve(ref.current);
          }
        });
      }, { rootMargin });
      observer.observe(ref.current);
    }
  }, [ref]);

  return isIntersecting;
};
      
    

export default useOnScreen