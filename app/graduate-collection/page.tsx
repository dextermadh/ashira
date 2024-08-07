'use client';
import { useEffect } from 'react';
import './page.css'
import { CardDemo } from './components/Card';
import { CardDemo2 } from './components/Card2';
import { CardDemo3 } from './components/Card3';
import Link from 'next/link';
import { GradualSpacingDemo10, IntroGraduateCollection } from './components/GradualSpacing';


export default function Home() {

  

  return (
        <div className=''>
          <IntroGraduateCollection />
          <div className="page-content">
          <div className="container1">
            <Link href="graduate-collection/portfolio">
          <CardDemo />
          </Link>
          <Link href="graduate-collection/look-book">
          <CardDemo2 />
          </Link>
          <Link href="graduate-collection/gallery">
          <CardDemo3 />
          </Link> 
            </div>
          </div>
          </div>


  )
}