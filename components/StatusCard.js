import Image from "next/image";
import { useRef } from 'react';
import useOnScreen from '../hooks/useOnScreenOnce'


const myLoader = ({ src, width, quality }) => {
  return `https://cdn.statically.io/img/cdn.sharemyfeel.com/f=auto,w=${width},q=${quality || 65}/file/2liner/${src}`};
  
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#ebebeb" offset="20%" />
      <stop stop-color="#d7d7d7" offset="50%" />
      <stop stop-color="#ebebeb" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ebebeb" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)  

export default function StatusCard() {
  // for cheaking if elements are in view port
  const ref = useRef();
  const inViewport = useOnScreen(ref, '-100px'); 
  if (inViewport) {
        console.log('in viewport:', ref.current.id);
        
    }
  return (
    <>
         <div className="contentCard">
  <p className="cardLine">
    This is teat line of card. Will it be better than all of others and the the problem.
  </p>
  <div className="cardImageContainer">
  <Image
      className="cardImage"
      loader={myLoader}
      src="image/Change-Attitude-Quotes-Lovesove.webp-1623170874204.webp"
      alt="Picture of the author"
      width={500}
      height={500}
      layout="responsive"
      sizes="18rem"
      priority="true"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
    />
  </div>
  <div ref={ref} id="1" className="cardButtom">
    <button>COPY</button>
    <button>DOWNLOAD</button>
    <button>EDIT</button>
    <button>SHARE</button>    
  </div>
</div> 
    </>
  );
}
