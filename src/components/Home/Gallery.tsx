'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import gallery_1 from '../../../public/gallery/gallery_1.jpg';
import gallery_2 from '../../../public/gallery/gallery_2.jpg';
import gallery_3 from '../../../public/gallery/gallery_3.jpg';
import gallery_4 from '../../../public/gallery/gallery_4.jpg';
import gallery_5 from '../../../public/gallery/gallery_5.jpg';
import gallery_6 from '../../../public/gallery/gallery_6.jpg';
import { homePage } from '../../constants/constants';
import { useTranslations } from 'next-intl';
import Section from '../Section';
import MainTitle from '../MainTitle';

const images = [
  {
    url: gallery_1,
    alt: 'HAPJE VAN COURGETTE-BOULETTE',
  },
  {
    url: gallery_2,
    alt: 'EMPANADAS MET EEN VULLING VAN PULLED CHICKEN',
  },
  {
    url: gallery_3,
    alt: 'DIP VAN GEGRILDE PAPRIKA EN ROOMKAAS',
  },
  {
    url: gallery_4,
    alt: 'HUEVOS ROTO',
  },
  {
    url: gallery_5,
    alt: 'SCAMPI-CHORIZO HAPJE',
  },
  {
    url: gallery_6,
    alt: 'HARTJESWAFELS',
  },
];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id={homePage.Gallery} sectionRef={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <MainTitle>{t('title')}</MainTitle>
      </motion.div>

      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className='group relative aspect-square overflow-hidden'
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className='object-cover transition-transform duration-500 group-hover:scale-110'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 ease-in-out group-hover:bg-black/30'>
              <span className='text-center text-lg font-medium text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
                {image.alt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
