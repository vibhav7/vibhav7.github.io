import HighlightedCode from './HighlightedCode';

export default function AlgorithmCard({ title = '', highlightedCode, description, algorithmState, timeComplexity, tooltip, showWarning }) {
   const { result, timeTaken, history } = algorithmState;

   return (
      <section className='flex flex-col justify-between gap-6 p-6 transition-shadow bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md'>
         <div className='space-y-4'>
            {title && <h3 className='pb-3 text-xl font-semibold text-gray-800 border-b border-gray-100'>{title}</h3>}
            {description && <p className='leading-relaxed text-gray-600'>{description}</p>}

            <div className='p-4 rounded-lg bg-gray-50'>
               <HighlightedCode highlightedCode={highlightedCode} />
            </div>
         </div>

         <div className='space-y-4'>
            {result !== null && (
               <div className='p-4 space-y-2 rounded-lg bg-blue-50'>
                  <p className='text-gray-700'>
                     Last Result: <span className='text-sm text-gray-700'>{result}</span>
                  </p>
                  <p className='text-sm text-gray-600'>
                     Time taken: <span className='font-medium text-blue-700'>{timeTaken}</span> milliseconds
                  </p>
               </div>
            )}
            {showWarning && history && history.length > 0 && (
               <div className='flex flex-col gap-2 text-sm text-gray-600'>
                  {timeComplexity && (
                     <div className='flex items-center gap-2' title={tooltip}>
                        <span className='font-medium'>Time Complexity:</span>
                        <span className='px-2 py-1 font-mono bg-gray-100 rounded'>{timeComplexity}</span>
                     </div>
                  )}
               </div>
            )}
         </div>
      </section>
   );
}
