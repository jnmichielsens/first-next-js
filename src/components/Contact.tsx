'use client';

import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4" />
                <span>+32 (0) 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4" />
                <span>info@melangetraiteur.be</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4" />
                <span>Rue de la Gastronomie 42, 1000 Brussels</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-6 h-6 mr-4" />
                <a href="#" className="hover:text-gray-600 transition-colors">
                  @melangetraiteur
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