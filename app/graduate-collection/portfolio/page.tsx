'use client';
import { useEffect } from 'react';
import './page.css'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import { IntroGraduateCollectionPortfolio } from './GradualSpacing';
import { Carousel } from './components/carousel';
import PortfolioDescription from './components/PDescription/portfolioDesciption';

export default function Home() {
  return (
    <div>
        <IntroGraduateCollectionPortfolio />
        <PortfolioDescription text={"This collection is inspired by human emotions and Kintsugi art theories, which I came up with and refined for my final collection during the final year of my studies for (BA) Hons, Fashion Design Degree at Falmouth University, UK."}/>
        <Carousel name='sajkdn'/>
    </div>
  );
}