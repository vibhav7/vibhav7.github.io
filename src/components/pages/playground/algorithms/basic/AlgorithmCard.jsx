import Card from '@/components/ui/Card';
import HighlightedCode from './HighlightedCode';
import CalculationHistory from './CalculationHistory';

export default function AlgorithmCard({ title = '', highlightedCode, inputLabel = 'N', description, showWarning = false, input, algorithmState }) {
   const { result, timeTaken, history } = algorithmState;

   return (
      <Card>
         <div className='space-y-4'>
            {title && <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>}
            {description && <p className='text-gray-500'>{description}</p>}

            <HighlightedCode highlightedCode={highlightedCode} />

            <div className='space-y-3'>
               <p className='text-xs font-medium text-gray-500'>
                  Note: try increasing one digit at a time, and compare the time taken by each algorithm. example: 1, 10, 100, 1000, 10000, 100000,
                  1000000
               </p>

               {showWarning && input > 1000000 && (
                  <p className='text-sm text-red-500'>Warning: Be careful with large values of {inputLabel}. Your browser may crash.</p>
               )}

               {result !== null && (
                  <div className='space-y-1'>
                     <p className='text-gray-700'>
                        Result: <span className='font-medium'>{result}</span>
                     </p>
                     <p className='text-sm text-gray-500'>
                        Time taken: <span className='font-medium'>{timeTaken}</span> milliseconds
                     </p>
                  </div>
               )}

               <CalculationHistory history={history} />
            </div>
         </div>
      </Card>
   );
}
