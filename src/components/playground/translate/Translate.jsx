import { useState } from 'react';
import { motion } from 'framer-motion';
import TranslateControls from '@/components/playground/translate/TranslateControls';
import CenteredElement from '@/components/playground/translate/CenteredElement';

export default function Translate() {
   const [translate, setTranslate] = useState({ x: 0, y: 0 });
   const [isWobbling, setIsWobbling] = useState(false);

   const handleHighlightClick = () => {
      setIsWobbling(true);
      // Scroll playground-main to bottom with smooth scrolling
      document.getElementById('playground-main').scrollTo({
         top: document.getElementById('playground-main').scrollHeight,
         behavior: 'smooth',
      });
   };

   return (
      <section className='flex flex-col h-full gap-6 p-4 rounded-lg shadow-sm '>
         <div className='space-y-6 text-center'>
            <div className='space-y-4'>
               <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Position Playground</h2>
               <p className='text-gray-500'>
                  Here I&apos;m using the translate property to center an element. To demonstrate how it works, I&apos;ve created a container with a
                  dashed line.
               </p>
               <p className='max-w-2xl mx-auto'>
                  <div className='p-4 mx-auto text-left text-white bg-blue-400 rounded-lg max-w-80'>
                     <p>position: absolute;</p>
                     <p>top: 50%;</p>
                     <p>left: 50%;</p>
                     <p>transform: translate(-50%, -50%);</p>
                  </div>
               </p>
               <div className='p-4 mx-auto border border-gray-300 rounded-lg bg-gray-50 max-w-80'>
                  Translate works on the <code className='text-sm font-bold underline decoration-blue-500 decoration-dashed'>element</code> itself,
                  not on the <code className='text-sm font-bold'>container</code>.
               </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
               <div className='space-y-2'>
                  <div className='text-xs text-left text-gray-500'>Note: This below element does not have any translate property.</div>
                  <div className='relative h-[400px] border border-gray-300 rounded-lg bg-white'>
                     <CenteredElement translate={null} />
                  </div>
               </div>

               <div className='space-y-2'>
                  <div className='text-xs text-left text-gray-500'>
                     Note: Below element has translate property which can be changed using the{' '}
                     <span id='highlight-translate-controls' className='text-blue-600 underline cursor-pointer' onClick={handleHighlightClick}>
                        slider.
                     </span>
                  </div>

                  <div className='relative h-[400px] border border-gray-300 rounded-lg bg-white'>
                     <CenteredElement translate={translate} />
                  </div>
                  <motion.div
                     animate={
                        isWobbling
                           ? {
                                rotate: [0, -3, 3, -3, 3, 0],
                             }
                           : {}
                     }
                     onAnimationComplete={() => setIsWobbling(false)}
                     transition={{ duration: 0.5 }}>
                     <TranslateControls translate={translate} setTranslate={setTranslate} />
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
}
