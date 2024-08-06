"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/collaborate", label: "Collaborate" },
  { path: "/projects", label: "Projects" },
  { path: "/technical-developments", label: "Technical Developments" },
  { path: "/private-label", label: "Private Label" },
  { path: "/about", label: "About Me" },
];

const Menu = () => {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef();

  const toggleMenu = () => {
    console.log("Menu toggled. Current state:", isMenuOpen);
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log("Setting up GSAP animations");

    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(
        ".menu-link-item-holder",
        {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        }
      );

    console.log("GSAP timeline created:", tl.current);
  }, []);

  useEffect(() => {
    console.log("isMenuOpen state changed:", isMenuOpen);
    if (isMenuOpen) {
      tl.current.play();
      console.log("Playing timeline");
    } else {
      tl.current.reverse();
      console.log("Reversing timeline");
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={containerRef}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link className="menu-logo1" href="/">Ashira Fernando</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link className="menu-logo1" href="/">Ashira Fernando</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>  
        <div className="menu-close-icon" onClick={toggleMenu}>
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-info">
            <div className="menu-info-col">
              <a href="https://www.instagram.com/ashiras_journal_/" target="_blank">Instagram &#8599;</a>
              <a href="http://www.linkedin.com/in/ashirafernando"  target="_blank">LinkedIn &#8599;</a>
              <a href="#">Behance &#8599;</a>
            </div>
            <div className="menu-info-col">
              <p>ashira0068@gmail.com</p>
              <p>+94761222577</p>
            </div>
          </div>
        </div>
        <div className="menu-preview">
          <p>View Showreel</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;