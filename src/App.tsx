import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChefHat, Phone, Mail, Instagram, MapPin, Menu as MenuIcon } from 'lucide-react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80"
            alt="Elegant table setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light tracking-wider mb-6"
          >
            MELANGE TRAITEUR
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl tracking-wide mb-8"
          >
            Exceptional Catering for Extraordinary Moments
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="btn-primary inline-block"
          >
            Book Your Event
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section ref={ref} className="py-24 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <ChefHat className="w-12 h-12 mx-auto mb-8 text-gray-800" />
          <h2 className="section-title">Our Philosophy</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-12">
            At Melange Traiteur, we believe that every gathering deserves exceptional cuisine. 
            Our passionate team crafts bespoke menus that blend traditional techniques with 
            contemporary flair, using only the finest seasonal ingredients to create 
            unforgettable culinary experiences.
          </p>
        </motion.div>
      </section>

      {/* Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
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

      <footer className="py-8 px-6 bg-gray-900 text-white text-center">
        <p className="text-sm">© 2024 Melange Traiteur. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;