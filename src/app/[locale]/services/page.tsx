'use client';

import { ChefHat, Users, GlassWater, UtensilsCrossed } from 'lucide-react';
import service_1 from '../../../../public/services/service_1.jpg';
import ImageBanner from '../../../components/ImageBanner';
import Section from '../../../components/Section';
import SubTitle from '../../../components/SubTitle';

const services = [
  {
    icon: ChefHat,
    title: 'Private Chef',
    description:
      'Experience fine dining in the comfort of your home with our professional private chef service.',
  },
  {
    icon: Users,
    title: 'Corporate Events',
    description:
      'Elevate your business gatherings with our tailored corporate catering solutions.',
  },
  {
    icon: GlassWater,
    title: 'Cocktail Parties',
    description:
      'Sophisticated cocktail receptions with elegant canapés and professional service.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Wedding Catering',
    description:
      'Create unforgettable moments with our bespoke wedding catering services.',
  },
];

export default function Services() {
  return (
    <>
      <ImageBanner image={service_1} title='Our Services' />

      <Section>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
            {services.map((service) => (
              <div key={service.title} className='text-center'>
                <service.icon className='mx-auto mb-6 h-12 w-12 text-gray-800' />
                <SubTitle>{service.title}</SubTitle>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
