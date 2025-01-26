import React from 'react';
import { motion } from 'framer-motion';
import ComingSoon from '@/components/ui/ComingSoon';

export default function Spacing() {
   const [margin, setMargin] = React.useState(4);
   const [padding, setPadding] = React.useState(4);

   return (
      <>
         {true ? (
            <ComingSoon />
         ) : (
            <>
               {' '}
               <section className='flex flex-col gap-6'>
                  <div className='text-center'>
                     <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>
                        Spacing Playground
                     </h2>
                     <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
                        Experiment with CSS Spacing properties. Understand how margin and padding affect layout and spacing between elements.
                     </p>
                  </div>

                  <section className='flex flex-col gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
                     <div
                        className='relative p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-96'
                        style={{ padding: `${padding * 0.25}rem` }}>
                        <motion.div
                           className='bg-blue-100 rounded-lg'
                           style={{ margin: `${margin * 0.25}rem` }}
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}>
                           <div className='flex items-center justify-center w-full h-full p-8 font-medium text-blue-800'>Content Box</div>
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
