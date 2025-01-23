import { useState } from 'react';
import ZIndexControls from './ZIndexControls';

export default function ZIndexExplanation() {
   const [zIndexValues, setZIndexValues] = useState({
      red: 1,
      blue: 2,
      green: 3,
   });
   const [isolation, setIsolation] = useState('auto');

   const handleZIndexChange = (color, value) => {
      setZIndexValues((prev) => ({
         ...prev,
         [color]: value,
      }));
   };

   const handleIsolationChange = (value) => {
      setIsolation(value);
   };

   return (
      <div className='p-4'>
         <div className='mb-8'>
            <h2 className='mb-4 text-2xl font-bold'>Z-Index & Stacking Context Playground</h2>
            <p className='mb-4 text-gray-600'>
               Experiment with z-index values and isolation property to understand how elements stack on top of each other. The isolation property
               creates a new stacking context.
            </p>
         </div>

         <div className='flex gap-8'>
            <div className='w-2/3'>
               <div className='relative h-[400px] border border-gray-300 rounded-lg p-4' style={{ isolation }}>
                  {/* Parent container with relative positioning */}
                  <div className='relative h-full'>
                     {/* Red Box */}
                     <div
                        className='absolute flex items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg cursor-move bg-red-500/70 left-10 top-10'
                        style={{ zIndex: zIndexValues.red }}>
                        Red Box
                        <br />
                        z-index: {zIndexValues.red}
                     </div>

                     {/* Blue Box */}
                     <div
                        className='absolute flex items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg cursor-move bg-blue-500/70 left-24 top-24'
                        style={{ zIndex: zIndexValues.blue }}>
                        Blue Box
                        <br />
                        z-index: {zIndexValues.blue}
                     </div>

                     {/* Green Box */}
                     <div
                        className='absolute flex items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg cursor-move bg-green-500/70 left-40 top-40'
                        style={{ zIndex: zIndexValues.green }}>
                        Green Box
                        <br />
                        z-index: {zIndexValues.green}
                     </div>
                  </div>
               </div>

               {/* Explanation Section */}
               <div className='p-4 mt-8 rounded-lg bg-gray-50'>
                  <h3 className='mb-2 text-lg font-semibold'>How it works:</h3>
                  <ul className='pl-5 space-y-2 text-gray-600 list-disc'>
                     <li>
                        <strong>Z-Index:</strong> Controls the vertical stacking order of elements. Higher values appear on top.
                     </li>
                     <li>
                        <strong>Stacking Context:</strong> Elements are stacked within their parent's stacking context.
                     </li>
                     <li>
                        <strong>Isolation:</strong> Creates a new stacking context, limiting z-index effects to within the container.
                     </li>
                  </ul>
               </div>
            </div>

            <div className='w-1/3'>
               <ZIndexControls
                  zIndexValues={zIndexValues}
                  isolation={isolation}
                  onZIndexChange={handleZIndexChange}
                  onIsolationChange={handleIsolationChange}
               />
            </div>
         </div>
      </div>
   );
}
