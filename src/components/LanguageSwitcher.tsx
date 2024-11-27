'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = {
    en: 'English',
    fr: 'Français',
    nl: 'Nederlands',
  };

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className='relative'
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={`nav-link flex items-center space-x-1 text-white`}>
        <span>{locale.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className='absolute left-0 mt-2 w-48 rounded-sm bg-white shadow-lg'
          >
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => handleLocaleChange(code)}
                className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-gray-100 ${
                  locale === code ? 'font-medium' : ''
                }`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
