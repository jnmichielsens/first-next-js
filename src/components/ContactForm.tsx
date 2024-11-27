'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: string;
  message: string;
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('form.error'));
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : t('form.error'));
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      onSubmit={handleSubmit}
      className='space-y-6'
    >
      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <label
            htmlFor='name'
            className='required mb-1 block text-sm font-medium text-gray-700'
          >
            {t('form.name')}
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='required mb-1 block text-sm font-medium text-gray-700'
          >
            {t('form.email')}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <label
            htmlFor='phone'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            {t('form.phone')}
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
        <div>
          <label
            htmlFor='date'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            {t('form.date')}
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            disabled={status === 'submitting'}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='guests'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          {t('form.guests')}
        </label>
        <input
          type='number'
          id='guests'
          name='guests'
          value={formData.guests}
          onChange={handleChange}
          disabled={status === 'submitting'}
          className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
        />
      </div>

      <div>
        <label
          htmlFor='message'
          className='required mb-1 block text-sm font-medium text-gray-700'
        >
          {t('form.message')}
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          disabled={status === 'submitting'}
          rows={4}
          className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
        ></textarea>
      </div>

      {status === 'error' && (
        <div className='text-sm text-red-600'>{errorMessage}</div>
      )}

      {status === 'success' && (
        <div className='text-sm text-green-600'>{t('form.success')}</div>
      )}

      <button
        type='submit'
        disabled={status === 'submitting'}
        className={`btn-primary w-full bg-primary-color hover:bg-primary-dark ${
          status === 'submitting' ? 'cursor-not-allowed opacity-75' : ''
        }`}
      >
        {status === 'submitting' ? t('form.sending') : t('form.submit')}
      </button>
    </motion.form>
  );
}
