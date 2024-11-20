'use client';

import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import ContactForm from './ContactForm';
import { contact, homePage } from "../constants/constants";

export default function Contact() {
  return (
    <section id={homePage.Contact} className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4"/>
                <a href={contact.phone.action}>{contact.phone.label}</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4"/>
                <a href={contact.email.action}>{contact.email.label}</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4"/>
                <span>{contact.place}</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-6 h-6 mr-4"/>
                <a href={contact.instagram.action} target={'_blank'} className="hover:text-gray-600 transition-colors">
                  {contact.instagram.label}
                </a>
              </div>
              <div className="flex items-center">
                <Facebook className="w-6 h-6 mr-4"/>
                <a href={contact.facebook.action}  target={'_blank'} className="hover:text-gray-600 transition-colors">
                  {contact.facebook.label}
                </a>
              </div>
            </div>
          </div>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}