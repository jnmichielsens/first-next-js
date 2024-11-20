'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import gallery_1 from '../../public/gallery/gallery_1.png';
import gallery_2 from '../../public/gallery/gallery_2.png';
import gallery_3 from '../../public/gallery/gallery_3.png';
import gallery_4 from '../../public/gallery/gallery_4.png';
import gallery_5 from '../../public/gallery/gallery_5.png';
import gallery_6 from '../../public/gallery/gallery_6.png';

const images = [
  {
    url: gallery_1,
    alt: 'Elegant plated dish'
  },
  {
    url: gallery_2,
    alt: 'Catering setup'
  },
  {
    url: gallery_3,
    alt: 'Fine dining experience'
  },
  {
    url: gallery_4,
    alt: 'Dessert presentation'
  },
  {
    url: gallery_5,
    alt: 'Cocktail service'
  },
  {
    url: gallery_6,
    alt: 'Event setup'
  }
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 lg:px-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title text-center">Our Creations</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="aspect-square overflow-hidden group relative"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}