import React from 'react';
import { motion } from 'framer-motion';

const GRID_ITEMS = [
   { id: '001', label: 'Item 1' },
   { id: '002', label: 'Item 2' },
   { id: '003', label: 'Item 3' },
   { id: '004', label: 'Item 4' },
   { id: '005', label: 'Item 5' },
   { id: '006', label: 'Item 6' },
];

export default function Grid() {
   const [columns, setColumns] = React.useState(3);
   const [gap, setGap] = React.useState(4);

   return (
      <section className='flex flex-col gap-6'>
         <div className='text-center'>
            <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Grid Layout Playground</h2>
            <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
               Experiment with CSS Grid properties in real-time. Adjust grid columns, gaps, and alignment to understand grid layout behavior.
            </p>
         </div>

         <section className='flex flex-col gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
            <div
               className='grid p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-96'
               style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                  gap: `${gap * 0.25}rem`,
               }}>
               {GRID_ITEMS.map((item) => (
                  <motion.div
                     layout={true}
                     key={item.id}
                     className='flex items-center justify-center p-4 font-medium text-gray-700 bg-gray-100 rounded-lg'
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     <motion.div layout='position'>{item.label}</motion.div>
                  </motion.div>
               ))}
            </div>

            {/* Controls will be added here */}
         </section>
      </section>
   );
}
