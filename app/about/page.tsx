"use client"
import React from "react";
import { useEffect } from 'react';
import "./brand.css"
import VelocityScroll from "@/components/VelocityScroll";
import Lenis from 'lenis'
import { Description, Description1, Intro, Section, Section1 } from "./component/about";
import { IntroAbout } from "./Components/GradualSpacing";

const Page = () => {

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      }, [])
    return (
    <div className="">
    <IntroAbout />
    <div className="content">
    <Intro />
    <Description />
    <Section />
    <Description1 />
    <Section1 />
    </div> 

    </div>
    
    );
};

export default Page;