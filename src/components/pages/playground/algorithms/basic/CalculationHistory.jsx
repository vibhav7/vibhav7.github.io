export default function CalculationHistory({ history }) {
   if (history.length === 0) return null;

   return (
      <div className='mt-4'>
         <h4 className='text-sm font-semibold text-gray-700 mb-2'>Calculation History</h4>
         <div className='space-y-2'>
            {history.map((entry, index) => (
               <div key={index} className='bg-gray-50 p-2 rounded-md'>
                  <div className='flex justify-between text-sm'>
                     <span className='text-gray-600'>Input: {entry.input}</span>
                     <span className='text-gray-600'>Result: {entry.result}</span>
                  </div>
                  <div className='text-xs text-gray-500'>Time taken: {entry.timeTaken} milliseconds</div>
               </div>
            ))}
         </div>
      </div>
   );
}
