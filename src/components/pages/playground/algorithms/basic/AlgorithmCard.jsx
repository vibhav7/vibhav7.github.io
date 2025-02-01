import Card from '@/components/ui/Card';
import HighlightedCode from './HighlightedCode';
import { useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AlgorithmCard({ title = '', highlightedCode, algorithmFn, inputLabel = 'N', inputType = 'number', description }) {
   const [input, setInput] = useState('');
   const [result, setResult] = useState(null);
   const [timeTaken, setTimeTaken] = useState(null);

   const handleCalculate = () => {
      const start = performance.now();
      const calculatedResult = algorithmFn(Number(input));
      const end = performance.now();

      setTimeTaken(end - start);
      setResult(calculatedResult);
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
            </div>
         </div>
      </Card>
   );
}
