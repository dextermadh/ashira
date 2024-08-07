'use client';
import { useEffect } from 'react';
import './page.css';
import { CardDemo } from './components/Card';
import { CardDemo2 } from './components/Card2';
import { CardDemo3 } from './components/Card3';
import Link from 'next/link';
import { GradualSpacingDemo11, IntroNeuromagination } from './components/GradualSpacing';

export default function Home() {
  

  return (
    <div className=''>
      <IntroNeuromagination />
      <div className="containerNeuro">
        <div className="page-contentNeuro">
          <Link href="neuromagination/portfolio">
            <CardDemo />
          </Link>
          <Link href="neuromagination/gallery">
            <CardDemo3 />
          </Link>
        </div>
      </div>
    </div>
  );
}
