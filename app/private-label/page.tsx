"use client";
import React, { useEffect } from "react";
import { GradualSpacingDemo3, IntroPrivateLabel } from "./GradulaSpacing";
import "./brand.css";
import VelocityScroll from "@/components/VelocityScroll";
import Lenis from 'lenis';
import { 
  Description, Description1, Description2, Description3, Description4, Description5, Description6, 
  Intro, Section, Section1 
} from "./component/private-label";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup function to remove Lenis instance when component unmounts
    return () => {
      // Add any necessary cleanup here if needed
    };
  }, []);

  return (
    <div className="page-container">
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

export default Page;
