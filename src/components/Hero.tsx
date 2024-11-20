'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import background from '../../public/home/background.png';

export default function Hero() {
  return (
    <section className="h-screen relative flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Elegant table setting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative text-center text-white z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-light tracking-wider mb-6"
        >
          MELANGE TRAITEUR
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl tracking-wide mb-8"
        >
          Exceptional Catering for Extraordinary Moments
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="btn-primary inline-block"
        >
          Book Your Event
        </motion.a>
      </div>
    </section>
  );
}