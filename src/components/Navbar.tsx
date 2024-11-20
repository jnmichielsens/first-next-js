'use client';

import { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { homePage } from '../constants/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = useMemo(
    () => [homePage.About, homePage.Menu, homePage.Gallery, homePage.Contact],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-primary-color py-4 shadow-md' : 'bg-transparent py-6'
        }`}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6'>
          <a
            href='#'
            className={`text-2xl font-light tracking-wider text-white`}
          >
            MT
          </a>

          <div className='hidden space-x-12 md:flex'>
            {menuItems.map((item) => (
              <a key={item} href={`#${item}`} className={`nav-link text-white`}>
                {item}
              </a>
            ))}
          </div>

          <button
            className={`text-white md:hidden`}
            onClick={() => setIsOpen(true)}
          >
            <Menu className='h-6 w-6' />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 bg-white md:hidden'
          >
            <div className='p-6'>
              <div className='flex justify-end'>
                <button onClick={() => setIsOpen(false)}>
                  <X className='h-6 w-6' />
                </button>
              </div>
              <div className='mt-24 flex flex-col items-center space-y-8'>
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className='nav-link text-2xl'
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
