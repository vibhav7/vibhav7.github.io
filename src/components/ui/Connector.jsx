import React from 'react';

export function Connector({ direction = 'horizontal', className = '', strokeWidth = 2, strokeDasharray = '8,8' }) {
   const isHorizontal = direction === 'horizontal';
   const viewBox = isHorizontal ? '0 0 1000 100' : '0 0 100 1000';
   const path = isHorizontal ? 'M0,50 C250,0 750,100 1000,50' : 'M50,0 C0,250 100,750 50,1000';

   const startCircle = isHorizontal ? { cx: '0', cy: '50' } : { cx: '50', cy: '0' };

   const endCircle = isHorizontal ? { cx: '1000', cy: '50' } : { cx: '50', cy: '1000' };

   return (
      <svg
         className={`absolute z-10 ${isHorizontal ? 'w-full h-24 -translate-y-1/2 top-1/2 left-0' : 'w-24 h-full'} ${className}`}
         viewBox={viewBox}
         preserveAspectRatio='none'>
         <path
            d={path}
            fill='none'
            stroke='#3b82f6'
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            // className='animate-dash'
         />
         <circle {...startCircle} r='4' fill='#3b82f6' />
         <circle {...endCircle} r='4' fill='#3b82f6' />
      </svg>
   );
}
