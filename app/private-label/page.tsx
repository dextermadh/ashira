"use client"
import React from "react";
import { useEffect } from 'react';
import { GradualSpacingDemo3, IntroPrivateLabel } from "./GradulaSpacing";
import "./brand.css"
import VelocityScroll from "@/components/VelocityScroll";
import Lenis from 'lenis'
import { Description, Description1, Intro, Section, Section1 } from "./component/private-label";

const page = () => {

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
    <IntroPrivateLabel />
    <VelocityScroll />
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

export default page;