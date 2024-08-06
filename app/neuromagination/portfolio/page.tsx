'use client';
import { useEffect } from 'react';
import './page.css'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import { Carousel2 } from './components/carousel/carousel';
import { IntroNeuromaginationPortfolio } from './components/GradualSpacing';

export default function Home() {
  return (
    <div>
        <IntroNeuromaginationPortfolio />
        <Carousel2 name='sajkdn'/>
    </div>
  );
}