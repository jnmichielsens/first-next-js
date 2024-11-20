'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
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
            Phone
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
        <div>
          <label
            htmlFor='date'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Event Date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleChange}
            className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='guests'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          Number of Guests
        </label>
        <input
          type='number'
          id='guests'
          name='guests'
          value={formData.guests}
          onChange={handleChange}
          className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
        />
      </div>

      <div>
        <label
          htmlFor='message'
          className='mb-1 block text-sm font-medium text-gray-700'
        >
          Message
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className='w-full rounded-none border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-900'
        ></textarea>
      </div>

      <button
        type='submit'
        className='btn-primary hover:bg-primary-dark w-full bg-primary-color'
      >
        Send Message
      </button>
    </motion.form>
  );
}
