import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';

export default function Algorithms() {
   const [highlightedCode, setHighlightedCode] = useState('');

   useEffect(() => {
      async function highlight() {
         const code = `function sumUpToN(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}`;

         const highlighted = await codeToHtml(code, {
            lang: 'javascript',
            theme: 'github-dark',
         });
         setHighlightedCode(highlighted);
      }

      highlight();
   }, []);

   return (
      <div className='p-6'>
         <h1 className='mb-4 text-2xl font-bold'>Algorithm Basics</h1>
         <div className='space-y-6'>
            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='mb-2 text-lg font-semibold'>Why to learn Algorithms?</h2>
               <p className='mb-4 text-gray-600'>Lets see an example of a simple algorithm.</p>
            </div>

            <h2 className='mb-2 text-lg font-semibold'>Example Algorithm: Sum up to N</h2>
            <div className='p-4 bg-white rounded-lg shadow'>
               <div className='mb-4'>
                  {highlightedCode && (
                     <div
                        className='p-4 rounded-lg [&_pre]:!bg-gray-800 [&_pre]:p-4 [&_code]:block [&_code]:!font-mono [&_code]:text-sm'
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                     />
                  )}
               </div>
               <p className='text-gray-600'>
                  This algorithm calculates the sum of numbers from 1 to N. For example, sumUpToN(5) = 15 (1 + 2 + 3 + 4 + 5)
               </p>
            </div>
         </div>
      </div>
   );
}
