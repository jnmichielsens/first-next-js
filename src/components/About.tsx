'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat } from 'lucide-react';
import { homePage } from '../constants/constants';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id={homePage.About}
      className='px-6 py-24 md:px-12 lg:px-24'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-4xl text-center'
      >
        <ChefHat className='mx-auto mb-8 h-12 w-12 text-gray-800' />
        <h2 className='section-title'>Our Philosophy</h2>
        <p className='mb-12 text-lg leading-relaxed md:text-xl'>
          At Melange Traiteur, we believe that every gathering deserves
          exceptional cuisine. Our passionate team crafts bespoke menus that
          blend traditional techniques with contemporary flair, using only the
          finest seasonal ingredients to create unforgettable culinary
          experiences.
        </p>
      </motion.div>
    </section>
  );
}
