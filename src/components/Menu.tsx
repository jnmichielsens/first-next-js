'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {homePage} from "../constants/constants";

const menuCategories = [
  {
    title: 'Cocktail Reception',
    items: [
      { name: 'Truffle Arancini', description: 'Crispy risotto balls with black truffle' },
      { name: 'Tuna Tartare', description: 'Fresh tuna with avocado on rice crackers' },
      { name: 'Wild Mushroom Vol-au-vent', description: 'Light puff pastry with creamy mushrooms' }
    ]
  },
  {
    title: 'Main Courses',
    items: [
      { name: 'Beef Wellington', description: 'Premium beef wrapped in mushroom duxelles and pastry' },
      { name: 'Sea Bass en Papillote', description: 'Fresh herbs, seasonal vegetables, white wine' },
      { name: 'Risotto aux Truffes', description: 'Carnaroli rice, black truffle, aged parmesan' }
    ]
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Crème Brûlée', description: 'Classic vanilla bean custard with caramelized sugar' },
      { name: 'Chocolate Soufflé', description: 'Warm chocolate soufflé with vanilla ice cream' },
      { name: 'Fruit Pavlova', description: 'Light meringue with fresh berries and cream' }
    ]
  }
];

export default function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id={homePage.Menu} className="py-24 px-6 md:px-12 lg:px-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-center">Sample Menu</h2>
          <p className="text-center text-lg mb-16">
            Our menus are customizable to suit your preferences and dietary requirements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light tracking-wide border-b border-gray-200 pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <h4 className="text-lg font-medium mb-1">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}