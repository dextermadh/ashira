"use client";
import React, { useEffect } from "react";
import { GradualSpacingDemo4, IntroTechnicalDevelopments } from "./components/GradualSpacingDemo4";
import "./page.css";
import { Carousel3 } from "../technical-developments/components/carousel/caorusel";
import Lenis from 'lenis';

const Page = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Duration for smooth scrolling
      easing: (t) => t, // Easing function for smooth transitions
    });

    // Animation frame update function
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    // Start animation frame loop
    requestAnimationFrame(raf);

    // Cleanup function to remove Lenis instance when component unmounts
    return () => {
      // No specific cleanup needed for Lenis, but keeping the return for best practices
      lenis.destroy();
    };
  }, []);

  return (
    <div className="">
      <IntroTechnicalDevelopments />
      <Carousel3 name="technical-developments" />
    </div>
  );
};

export default Page;
