import React from 'react';
import { motion } from 'framer-motion';
import ComingSoon from '@/components/ui/ComingSoon';

export default function Position() {
   const [position, setPosition] = React.useState('relative');
   const [top, setTop] = React.useState(0);
   const [left, setLeft] = React.useState(0);

   return (
      <>
         {true ? (
            <ComingSoon />
         ) : (
            <>
               {' '}
               <section className='flex flex-col h-full gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
                  <div className='text-center'>
                     <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>
                        Position Playground
                     </h2>
                     <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
                        Experiment with CSS Position properties. Learn how different position values and offsets affect element placement.
                     </p>
                  </div>

                  <section className='flex flex-col gap-6 rounded-lg shadow-sm bg-gray-50'>
                     <div className='relative p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-96'>
                        <motion.div
                           className='w-24 h-24 bg-blue-500 rounded-lg'
                           style={{ position, top: `${top}px`, left: `${left}px` }}
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}>
                           <div className='flex items-center justify-center w-full h-full font-medium text-white'>Drag me!</div>
                        </motion.div>
                     </div>

                     {/* Controls will be added here */}
                  </section>
               </section>
            </>
         )}
      </>
   );
}
