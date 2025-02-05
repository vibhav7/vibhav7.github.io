import { useState } from 'react';

export function Tooltip({ children, content }) {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <div className='relative inline-block'>
         <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
            {children}
         </div>
         {isVisible && (
            <div className='absolute z-50 px-2 py-1 text-xs font-medium text-white transform -translate-x-1/2 bg-gray-900 rounded-md left-1/2 -top-8 whitespace-nowrap'>
               {content}
               <div className='absolute w-2 h-2 transform rotate-45 bg-gray-900 -bottom-1 left-1/2 -translate-x-1/2' />
            </div>
         )}
      </div>
   );
}
