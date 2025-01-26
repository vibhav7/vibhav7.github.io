import { useState } from 'react';
import ZIndexControls from './ZIndexControls';
import Card from '@/components/ui/Card';
import ZIndexBox from './ZIndexBox';

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
               <div className='relative h-[400px] border border-gray-300 bg-white rounded-lg p-4' style={{ isolation }}>
                  {/* Parent container with relative positioning */}
                  <div className='relative h-full'>
                     {/* Red Box */}
                     <ZIndexBox additionalClass='left-10 top-10' zIndexValues={zIndexValues} cardType='red' />

                     {/* Blue Box */}
                     <ZIndexBox additionalClass='left-24 top-24' zIndexValues={zIndexValues} cardType='blue' />

                     {/* Green Box */}
                     <ZIndexBox additionalClass='left-40 top-40' zIndexValues={zIndexValues} cardType='green' />
                  </div>
               </div>
            </div>

            <div className='flex flex-col justify-center w-1/3 gap-4'>
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
