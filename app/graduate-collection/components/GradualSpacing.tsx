import GradualSpacing from "@/components/ui/gradual-spacing";
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export function GradualSpacingDemo10() {
  return (
    <GradualSpacing
      className="font-display text-center text-5xl font-bold tracking-[-0.1em]  text-black dark:text-white md:text-7xl md:leading-[5rem] font1"
      text="Graduate Collection"
    />
  );
}
export function IntroGraduateCollection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden'>
        <motion.div style={{y}} className='relative h-full items-center flex justify-center'>
          <GradualSpacingDemo10 />
        </motion.div>
      </div>
    )
  }