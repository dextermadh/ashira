"use client"
import React from "react";
import { useEffect } from 'react';
import { GradualSpacingDemo3, IntroPrivateLabel } from "./GradulaSpacing";
import "./brand.css"
import VelocityScroll from "@/components/VelocityScroll";
import Lenis from 'lenis'
import { Description, Description1, Description2, Description3, Description4, Description5, Description6, Intro, Section, Section1, Section2, Section3, Section4, Section5, Section6 } from "./component/private-label";

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
    <Description2 />
    <Section />
    <Description3 />
    <Section1 />
    <Description4 />
    <Section />
    <Description5 />
    <Section1 />
    <Description6 />
    <Section />
    </div> 

    </div>
    
    );
};

export default page;