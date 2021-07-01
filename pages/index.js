import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"

import Header from "../components/Header.js";
import StatusCard from "../components/StatusCard.js";
import MobileMenu from "../components/MobileMenu.js";
import Footer from "../components/Footer.js";

export default function Home() {
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos)
    window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  //console.log(currentScrollPos)
  if (prevScrollpos > currentScrollPos) {
       console.log(true)
       setScrolled(true)
     } else {
       setScrolled(false)
     }
     prevScrollpos = currentScrollPos;
   }
})

  return (
    <>
<Header />
<div className="body">
   <div style={{top: scrolled ? "3rem" : ""}} className="scrollNav">
      <a href="#https://modapk.vercel.app">Attitude</a>
      <a href="">Love</a>
      <a href="">Sad</a>
      <a href="">Funny</a>
      <a href="">Best</a>
      <a href="">Love</a>
      <a href="">Sad</a>
      <a href="">Funny</a>
      <a href="">Best</a>
   </div>
   <div style={{top: scrolled ? "5.15rem" : ""}} className="tabNav">
      <a href="">
         <button className="tabButtonWrap activeTabNav">
            <div>Best</div>
         </button>
      </a>
      <a href="">
         <button className="tabButtonWrap">
            <div>Trending</div>
         </button>
      </a>
      <a href="">
         <button className="tabButtonWrap">
            <div>New</div>
         </button>
      </a>
      <a href="">
         <button className="tabButtonWrap">
            <div>Videos</div>
         </button>
      </a>
   </div>
   <div className="sidebar">
      <br />
      ------------------sidebar------------------
   </div>
   <div className="content">
      <div className="contentHead">
         <h1>It is Header</h1>
         <p></p>
      </div>
      <div className="contentBody">
      
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
      <StatusCard />
      
      </div>
   </div>
</div>
<Footer />
    </>
  );
}
