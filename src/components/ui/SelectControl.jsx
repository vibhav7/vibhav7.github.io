import React from 'react';

export default function SelectControl({ label, value, onChange, ...delegated }) {
   const id = React.useId();

   return (
      <div className='flex flex-col gap-2'>
         <label htmlFor={id} className='text-sm font-medium text-gray-700'>
            {label}
         </label>
         <select
            id={id}
            className='min-w-[180px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition-colors hover:border-gray-400'
            value={value}
            onChange={onChange}
            {...delegated}
         />
      </div>
   );
}
