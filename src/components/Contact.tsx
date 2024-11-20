'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';
import { contact, homePage } from '../constants/constants';

export default function Contact() {
  return (
    <section
      id={homePage.Contact}
      className='bg-white px-6 py-24 md:px-12 lg:px-24'
    >
      <div className='mx-auto max-w-6xl'>
        <h2 className='section-title mb-16 text-center'>Get in Touch</h2>
        <div className='grid gap-12 md:grid-cols-2'>
          <div>
            <h3 className='mb-8 text-2xl font-light'>Contact Information</h3>
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
    </section>
  );
}
