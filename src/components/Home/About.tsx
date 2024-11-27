'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat } from 'lucide-react';
import { homePage } from '../../constants/constants';
import { useTranslations } from 'next-intl';
import Section from '../Section';

export default function About() {
  const t = useTranslations('about');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Section id={homePage.About} sectionRef={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-4xl text-center'
      >
        <ChefHat className='mx-auto mb-8 h-12 w-12 text-gray-800' />
        <h2 className='section-title'>{t('title')}</h2>
        <p className='mb-12 text-lg leading-relaxed md:text-xl'>
          {t('description')}
        </p>
      </motion.div>
    </Section>
  );
}
