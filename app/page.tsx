"use client";
import React, { useState, useEffect } from "react";
import { SpotlightPreview } from "@/components/SpotlightText";
import VelocityScroll from "@/components/VelocityScroll";
import { HeroBanner } from "@/components/HeroBanner";
import HeroSection from "@/components/HeroSection";
import Hero from "@/components/Hero/Hero";
import { CardHoverEffect } from "@/components/CardHoverEffect";
import { TabsDemo } from "@/components/Tabs";
import PreLoader from "@/components/preloader/preloader";
import { AnimatePresence } from 'framer-motion';
import Description from '../components/Description/description';
import Lenis from '@studio-freight/lenis'
import ProjectCard from '../components/ProjectCard/projectCard';
import { useScroll } from 'framer-motion';
import {  useRef } from 'react';
import image1 from "../public/assets/FASHION_SHOOT_3/p (56).jpg"
import Link from "next/link";
import ProjectSection from "./projects/components/projectSection";





export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const projects = [
    {
      title: "Graduate Collection",
      description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: image1,
      link: "/graduate-collection",
      color: "#e0cdb7"
    },
    {
      title: "Neuromagination",
      description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: image1,
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#e0cdb7"
    },
    {
      title: "Immoratal Blackness",
      description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: image1,
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#e0cdb7"
    },
  ]

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Hero />
      <Description />
      <div className="comb">
      <HeroSection />
      </div>
      <ProjectSection />
      <VelocityScroll />
    </div>
  );
}
