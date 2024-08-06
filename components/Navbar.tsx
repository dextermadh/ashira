"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import image1 from "../public/assets/SelectedOnes/look1_1.jpg";
import image2 from "../public/assets/SelectedOnes/look2_1.jpg";
import image3 from "../public/assets/SelectedOnes/look3_1.jpg";
import image4 from "../public/assets/SelectedOnes/look4_1.jpg";
import image5 from "../public/assets/SelectedOnes/look5_1.jpg";
import image6 from "../public/assets/SelectedOnes/look6_1.jpg";

export const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 px-4 md:px-6 lg:px-8", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Ashira Fernando"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Collaborate"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Graduate Collection</HoveredLink>
            <HoveredLink href="/interface-design">Neuromagination</HoveredLink>
            <HoveredLink href="/seo">Immortal Blackness</HoveredLink>
            <HoveredLink href="/branding">Other Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Technical Developments">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">CADs</HoveredLink>
            <HoveredLink href="/individual">Tech packs</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Private Label"></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Brand"></MenuItem>
      </Menu>
    </div>
  );
};
