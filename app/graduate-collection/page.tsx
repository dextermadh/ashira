'use client';
import { useEffect } from 'react';
import './page.css'
import { GCardDemo } from './components/GCard';
import { GCardDemo2 } from './components/GCard2';
import { GCardDemo3 } from './components/GCard3';
import Link from 'next/link';
import { GradualSpacingDemo10, IntroGraduateCollection } from './components/GradualSpacing';


export default function Home() {

  

  return (
        <div className=''>
          <IntroGraduateCollection />
          <div className="page-content">
          <div className="container1">
            <Link href="graduate-collection/portfolio">
          <GCardDemo />
          </Link>
          <Link href="graduate-collection/look-book">
          <GCardDemo2 />
          </Link>
          <Link href="graduate-collection/gallery">
          <GCardDemo3 />
          </Link> 
            </div>
          </div>
          </div>


  )
}