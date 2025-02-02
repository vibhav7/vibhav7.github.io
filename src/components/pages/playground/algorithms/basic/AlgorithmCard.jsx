import Card from '@/components/ui/Card';
import HighlightedCode from './HighlightedCode';
import CalculationHistory from './CalculationHistory';

export default function AlgorithmCard({ title = '', highlightedCode, inputLabel = 'N', description, showWarning = false, input, algorithmState }) {
   const { result, timeTaken, history } = algorithmState;

   return (
      <section>
         <div className='space-y-4'>
            {title && <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>}
            {description && <p className='text-gray-500'>{description}</p>}

            <HighlightedCode highlightedCode={highlightedCode} />

            <div className='space-y-3'>
               {result !== null && (
                  <div className='space-y-1'>
                     <p className='text-gray-700'>
                        Last Result: <span className='font-medium'>{result}</span>
                     </p>
                     <p className='text-sm text-gray-500'>
                        Time taken: <span className='font-medium'>{timeTaken}</span> milliseconds
                     </p>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}
