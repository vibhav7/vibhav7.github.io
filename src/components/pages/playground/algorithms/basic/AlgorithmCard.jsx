import Card from '@/components/ui/Card';
import HighlightedCode from './HighlightedCode';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import CalculationHistory from './CalculationHistory';

export default function AlgorithmCard({
   title = '',
   highlightedCode,
   algorithmFn,
   inputLabel = 'N',
   inputType = 'number',
   description,
   showWarning = false,
}) {
   const [input, setInput] = useState('');
   const [result, setResult] = useState(null);
   const [timeTaken, setTimeTaken] = useState(null);
   const [history, setHistory] = useState([]);

   const handleCalculate = () => {
      const start = performance.now();
      const calculatedResult = algorithmFn(Number(input));
      const end = performance.now();
      const timeElapsed = end - start;

      setTimeTaken(timeElapsed);
      setResult(calculatedResult);

      // Add new calculation to history
      setHistory((prev) => [
         {
            input,
            result: calculatedResult,
            timeTaken: timeElapsed,
         },
         ...prev,
      ]);
   };

   return (
      <Card>
         <div className='space-y-4'>
            {title && <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>}
            {description && <p className='text-gray-500'>{description}</p>}

            <HighlightedCode highlightedCode={highlightedCode} />

            <div className='space-y-3'>
               <section className='flex items-center gap-2'>
                  <label htmlFor='algorithm-input' className='text-gray-700'>
                     {inputLabel} =
                  </label>
                  <Input id='algorithm-input' type={inputType} value={input} onChange={(e) => setInput(e.target.value)} className='w-32' />
                  <Button onClick={handleCalculate}>Calculate</Button>
               </section>

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
