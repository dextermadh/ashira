'use client';
import { useEffect } from 'react';
import './page.css';
import { NCardDemo } from './components/Card';
import { NCardDemo2 } from './components/NCard2';
import { NCardDemo3 } from './components/NCard3';
import Link from 'next/link';
import { GradualSpacingDemo11, IntroNeuromagination } from './components/GradualSpacing';

export default function Home() {
  

  return (
    <div className=''>
      <IntroNeuromagination />
      <div className="containerNeuro">
        <div className="page-contentNeuro">
          <Link href="neuromagination/portfolio">
            <NCardDemo />
          </Link>
          <Link href="neuromagination/gallery">
            <NCardDemo3 />
          </Link>
        </div>
      </div>
    </div>
  );
}
