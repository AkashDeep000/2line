import Image from "next/image";

const myLoader = ({ src, width, quality }) => {
  return `https://cdn.statically.io/img/cdn.sharemyfeel.com/f=auto,w=${width},q=${quality || 75}/file/2liner/${src}`}
  

export default function StatusCard() {
  return (
    <>
         <div className="contentCard">
  <p className="cardLine">
    This is teat line of card. Will it be better than all of others and the the problem.
  </p>
  <div className="cardImageContainer">
  <Image
      className="cardImage animated-background"
      loader={myLoader}
      src="image/Change-Attitude-Quotes-Lovesove.webp-1623170874204.webp"
      alt="Picture of the author"
      width={500}
      height={500}
      preload = {true}
    />
  </div>
  <div className="cardButtom">
    <button>COPY</button>
    <button>DOWNLOAD</button>
    <button>EDIT</button>
    <button>SHARE</button>    
  </div>
</div> 
    </>
  );
}
