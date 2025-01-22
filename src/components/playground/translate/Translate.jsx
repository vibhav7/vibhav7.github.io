import { useState } from 'react';

export default function Translate() {
   const [translate, setTranslate] = useState({ x: 0, y: 0 });

   return (
      <section className='flex flex-col h-full gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
         <div className='text-center'>
            <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Position Playground</h2>
            <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
               Experiment with CSS Position properties. Learn how different position values and offsets affect element placement.
            </p>
         </div>

         <div className='flex flex-col gap-4'>
            {/* Controls */}
            <div className='flex gap-4'>
               <div className='flex items-center gap-2'>
                  <label htmlFor='translateX' className='text-sm font-medium'>
                     Translate X:
                  </label>
                  <input
                     id='translateX'
                     type='range'
                     min='-100'
                     max='100'
                     value={translate.x}
                     onChange={(e) => setTranslate((prev) => ({ ...prev, x: parseInt(e.target.value) }))}
                     className='w-32'
                  />
                  <span className='text-sm'>{translate.x}%</span>
               </div>
               <div className='flex items-center gap-2'>
                  <label htmlFor='translateY' className='text-sm font-medium'>
                     Translate Y:
                  </label>
                  <input
                     id='translateY'
                     type='range'
                     min='-100'
                     max='100'
                     value={translate.y}
                     onChange={(e) => setTranslate((prev) => ({ ...prev, y: parseInt(e.target.value) }))}
                     className='w-32'
                  />
                  <span className='text-sm'>{translate.y}%</span>
               </div>
            </div>

            {/* Container with centered element */}
            <div className='relative h-[400px] border border-gray-300 rounded-lg bg-white'>
               {/* Horizontal dashed line */}
               <div className='absolute left-0 w-full border-t border-gray-300 border-dashed top-1/2'></div>
               {/* Vertical dashed line */}
               <div className='absolute top-0 h-full border-l border-gray-300 border-dashed left-1/2'></div>

               {/* Centered child element */}
               <div
                  className='absolute w-20 h-20 bg-blue-500 rounded-lg top-1/2 left-1/2'
                  style={{
                     transform: `translate(${translate.x}%, ${translate.y}%)`,
                  }}></div>
            </div>
         </div>
      </section>
   );
}
