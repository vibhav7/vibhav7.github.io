export default function CalculationHistory({ history }) {
   if (history.length === 0) return null;

   console.log(history);
   return (
      <div className='mt-6'>
         <div className='flex items-center gap-2 mb-3'>
            <h4 className='text-sm font-semibold text-gray-700'>Calculation History</h4>
            <span className='px-2 py-0.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-full'>{history.length} entries</span>
         </div>

         <div className='space-y-3'>
            {history.map((entry, index) => (
               <div key={index} className='p-3 transition-all duration-200 bg-white border rounded-lg hover:shadow-sm'>
                  <div className='flex flex-col gap-2 sm:flex-row sm:justify-between'>
                     <div className='flex items-center gap-2'>
                        <span className='px-2 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded'>#{history.length - index}</span>
                        <span className='text-sm text-gray-700'>
                           Input: <span className='font-medium'>{entry.input}</span>
                        </span>
                     </div>
                     <span className='text-xs text-gray-700'>
                        Result: <span className=''>{entry.result}</span>
                     </span>
                  </div>

                  <div className='flex items-center gap-4 mt-2 text-xs text-gray-500'>
                     <div className='flex items-center gap-2'>
                        <svg
                           className='w-4 h-4 text-gray-400'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           viewBox='0 0 24 24'
                           stroke='currentColor'>
                           <path d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path>
                        </svg>
                        <span>
                           Time: <span className='font-medium text-blue-600'>{entry.timeTaken}</span> ms
                        </span>
                     </div>
                     <div className='flex items-center gap-2'>
                        <svg
                           className='w-4 h-4 text-gray-400'
                           fill='none'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='2'
                           viewBox='0 0 24 24'
                           stroke='currentColor'>
                           <path d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'></path>
                        </svg>
                        <span>
                           Iterations: <span className='text-base font-medium text-blue-600'>{entry.iterations}</span>
                        </span>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
