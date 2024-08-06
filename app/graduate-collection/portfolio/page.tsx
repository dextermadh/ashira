'use client';
import { useEffect } from 'react';
import './page.css'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

import Image from 'next/image';
import { IntroGraduateCollectionPortfolio } from './GradualSpacing';
import { Carousel } from './components/carousel';

export default function Home() {
  return (
    <div>
        <IntroGraduateCollectionPortfolio />
        <Carousel name='sajkdn'/>
    </div>
  );
}