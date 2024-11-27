'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { appPages, homePage } from '../constants/constants';
import { capitalizeFirstLetter } from '../services/capitalizeFirstLetter';
import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const t = useTranslations('navigation');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = useMemo(
    () => [
      {
        name: t('about'),
        href: homePage.About,
      },
      {
        name: t('menu'),
        href: homePage.Menu,
      },
      {
        name: t('gallery'),
        href: homePage.Gallery,
      },
    ],
    []
  );
  const dropdownItems = useMemo(
    () => [
      { name: t('services'), href: appPages.Services },
      { name: t('events'), href: appPages.Events },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-primary-color py-4 shadow-md' : 'bg-transparent py-6'
        }`}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6'>
          <Link
            href='/'
            className={`text-2xl font-light tracking-wider text-white`}
          >
            MT
          </Link>

          <div className='hidden items-center space-x-8 md:flex'>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className={`nav-link text-white`}
              >
                {capitalizeFirstLetter(item.name)}
              </a>
            ))}

            <div
              ref={dropdownRef}
              className='relative'
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`nav-link flex items-center space-x-1 text-white`}
              >
                <span>{t('discover')}</span>
                <ChevronDown className='h-4 w-4' />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute left-0 mt-2 w-48 rounded-sm bg-white shadow-lg'
                  >
                    {dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className='block px-4 py-2 text-gray-800 transition-colors hover:bg-gray-100'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href={`#${homePage.Contact}`} className={`nav-link text-white`}>
              {capitalizeFirstLetter(t('contact'))}
            </a>
            <LanguageSwitcher />
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
                {dropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className='nav-link text-2xl'
                    onClick={() => setIsOpen(false)}
                  >
                    {capitalizeFirstLetter(item.name)}
                  </Link>
                ))}
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    className='nav-link text-2xl'
                    onClick={() => setIsOpen(false)}
                  >
                    {capitalizeFirstLetter(item.name)}
                  </a>
                ))}
                <a href={`#${homePage.Contact}`} className='nav-link text-2xl'>
                  {capitalizeFirstLetter(t('contact'))}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
