'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import background from '../../public/home/background.png';
import { homePage } from '../constants/constants';

export default function Hero() {
  return (
    <section className='relative flex h-screen items-center justify-center'>
      <div className='absolute inset-0'>
        <Image
          src={background}
          alt='Elegant table setting'
          fill
          className='object-cover'
          priority
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/40' />
      </div>
      <div className='relative z-10 px-4 text-center text-white'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-6 text-5xl font-light tracking-wider md:text-7xl'
        >
          MELANGE TRAITEUR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='mb-8 text-xl tracking-wide md:text-2xl'
        >
          Exceptional Catering for Extraordinary Moments
        </motion.p>
        <motion.a
          href={`#${homePage.Contact}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className='btn-primary inline-block bg-primary-color hover:bg-primary-dark'
        >
          Book Your Event
        </motion.a>
      </div>
    </section>
  );
}
