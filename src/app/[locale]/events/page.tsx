'use client';

import Image from 'next/image';
import background from '../../../../public/events/background.jpg';
import event_1 from '../../../../public/events/event_1.jpg';
import event_2 from '../../../../public/events/event_2.jpg';
import event_3 from '../../../../public/events/event_3.jpg';
import ImageBanner from '../../../components/ImageBanner';
import Section from '../../../components/Section';

const events = [
  {
    title: 'Corporate Gala',
    date: 'December 15, 2023',
    image: event_1,
    description:
      'Annual end-of-year celebration featuring a five-course dinner and live entertainment.',
  },
  {
    title: 'Wedding Showcase',
    date: 'January 20, 2024',
    image: event_2,
    description:
      'Experience our wedding catering services with menu tastings and venue styling.',
  },
  {
    title: 'Summer Garden Party',
    date: 'June 5, 2024',
    image: event_3,
    description:
      'Outdoor networking event with seasonal cocktails and garden-fresh cuisine.',
  },
];

export default function Events() {
  return (
    <>
      <ImageBanner image={background} title='Upcoming Events' />

      <Section>
        <div className='mx-auto max-w-6xl'>
          <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
            {events.map((event) => (
              <div key={event.title} className='group'>
                <div className='relative mb-6 aspect-[4/3] overflow-hidden'>
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                </div>
                <h3 className='mb-2 text-2xl font-light'>{event.title}</h3>
                <p className='mb-4 text-gray-500'>{event.date}</p>
                <p className='text-gray-600'>{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
