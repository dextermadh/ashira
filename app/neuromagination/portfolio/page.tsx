'use client';
import { useEffect } from 'react';
import './page.css'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import { Carousel2 } from './components/carousel/carousel';
import { IntroNeuromaginationPortfolio } from './components/GradualSpacing';
import PortfolioDescription from '@/app/graduate-collection/portfolio/components/PDescription/portfolioDesciption';

export default function Home() {
  return (
    <div>
        <IntroNeuromaginationPortfolio />
        <PortfolioDescription text={"This Conceptual Development was created and implemented during the second year of study, drawing inspiration from the inexhaustible human power to imagine."}/>
        <Carousel2 name='sajkdn'/>
        
    </div>
  );
}