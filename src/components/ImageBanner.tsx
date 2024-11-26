'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

const ImageBanner = ({
  image,
  title,
}: {
  image: StaticImageData;
  title: string;
}) => (
  <section className='relative flex h-[80vh] items-center justify-center'>
    <div className='absolute inset-0'>
      <Image src={image} alt={title} fill className='object-cover' priority />
      <div className='absolute inset-0 bg-black/40' />
    </div>
    <div className='relative z-10 px-4 text-center text-white'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mb-6 text-5xl font-light tracking-wider md:text-7xl'
      >
        {title}
      </motion.h1>
    </div>
  </section>
);

export default ImageBanner;
