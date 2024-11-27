'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import ContactForm from '../ContactForm';
import { contact, homePage } from '../../constants/constants';
import { useTranslations } from 'next-intl';
import Section from '../Section';
import MainTitle from '../MainTitle';
import SubTitle from '../SubTitle';

export default function Contact() {
  const t = useTranslations('contact');
  return (
    <Section id={homePage.Contact} className={'bg-zinc-50'}>
      <div className='mx-auto max-w-6xl'>
        <MainTitle>{t('title')}</MainTitle>
        <div className='grid gap-12 md:grid-cols-2 mt-16'>
          <div>
            <SubTitle>{t('info.title')}</SubTitle>
            <div className='space-y-6'>
              <div className='flex items-center'>
                <Phone className='mr-4 h-6 w-6' />
                <a href={contact.phone.action}>{contact.phone.label}</a>
              </div>
              <div className='flex items-center'>
                <Mail className='mr-4 h-6 w-6' />
                <a href={contact.email.action}>{contact.email.label}</a>
              </div>
              <div className='flex items-center'>
                <MapPin className='mr-4 h-6 w-6' />
                <span>{contact.place}</span>
              </div>
              <div className='flex items-center'>
                <Instagram className='mr-4 h-6 w-6' />
                <a
                  href={contact.instagram.action}
                  target={'_blank'}
                  className='transition-colors hover:text-gray-600'
                >
                  {contact.instagram.label}
                </a>
              </div>
              <div className='flex items-center'>
                <Facebook className='mr-4 h-6 w-6' />
                <a
                  href={contact.facebook.action}
                  target={'_blank'}
                  className='transition-colors hover:text-gray-600'
                >
                  {contact.facebook.label}
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
