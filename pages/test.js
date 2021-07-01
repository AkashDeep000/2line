import React, { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen'

export default function Home() {
  const ref = useRef();
  const inViewport = useOnScreen(ref, '0px'); 
  if (inViewport) {
        console.log('in viewport:', ref.current);
        
    }
  return (
    <div ref={ref}>Test  {inViewport ? 'is in viewport' : ''}</div>
        
    )
};