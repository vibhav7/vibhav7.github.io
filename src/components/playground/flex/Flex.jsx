import React from 'react';
import { motion } from 'framer-motion';
import FlexControls from './flex-controls/FlexControls';

function FlexDemo() {
   const [flexDirection, setFlexDirection] = React.useState('row');
   const [justifyContent, setJustifyContent] = React.useState('flex-start');
   const [alignItems, setAlignItems] = React.useState('flex-start');

   return (
      <section className='flex flex-col h-full gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
         <div className='text-center '>
            <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Flexbox Playground</h2>
            <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
               Experiment with CSS Flexbox properties in real-time. Toggle between standard CSS and Tailwind classes to see how flexbox works. Adjust
               flex direction, justification, and alignment to understand layout behavior.
            </p>
         </div>

         <section className='flex flex-col gap-6 rounded-lg shadow-sm bg-gray-50'>
            <FlexControls
               flexDirection={flexDirection}
               setFlexDirection={setFlexDirection}
               justifyContent={justifyContent}
               setJustifyContent={setJustifyContent}
               alignItems={alignItems}
               setAlignItems={setAlignItems}
            />
            <div
               className='flex gap-3 p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-96'
               style={{ flexDirection, justifyContent, alignItems }}>
               {ITEMS.map((item) => (
                  <motion.div
                     layout={true}
                     key={item.id}
                     className='p-4 text-white transition-shadow rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-lg'
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     <motion.div layout='position' className='font-medium'>
                        {item.label}
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </section>
      </section>
   );
}

const ITEMS = [
   { id: '001', label: 'Hello' },
   { id: '002', label: 'to' },
   { id: '003', label: 'the' },
   { id: '004', label: 'World!' },
];

export default FlexDemo;
