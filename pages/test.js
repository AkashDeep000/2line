import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header.js";
import StatusCard from "../components/StatusCard.js";
import MobileMenu from "../components/MobileMenu.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <>
<Header />
<div class="body">
   <div class="scrollNav">
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
   <div class="tabNav">
      <a href="">
         <button class="tabButtonWrap activeTabNav">
            <div>Best</div>
         </button>
      </a>
      <a href="">
         <button class="tabButtonWrap">
            <div>Trending</div>
         </button>
      </a>
      <a href="">
         <button class="tabButtonWrap">
            <div>New</div>
         </button>
      </a>
      <a href="">
         <button class="tabButtonWrap">
            <div>Videos</div>
         </button>
      </a>
   </div>
   <div class="sidebar">
      <br />
      ------------------sidebar------------------
   </div>
   <div class="content">
      <div class="contentHead">
         <h1>It is Header</h1>
         <p></p>
      </div>
      <div class="contentBody">
      
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
