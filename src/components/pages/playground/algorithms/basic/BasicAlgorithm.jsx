import { useEffect, useState } from 'react';
import useHighlightCode from '@/hooks/playground/useHighlightCode';
import { sumUpToNUsingFor, sumUpToNUsingMath, stringSumUpToNUsingFor, stringSumUpToNUsingMath } from '@/lib/algorithm/basics';

import AlgorithmCard from './AlgorithmCard';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import useAlgorithm from '@/hooks/playground/algorithm/useAlgorithm';

export default function BasicAlgorithm() {
   const [input, setInput] = useState('');
   const { highlightedCode: highlightedCodeSumUpToNUsingFor, highlight: highlightSumUpToNUsingFor } = useHighlightCode();
   const { highlightedCode: highlightedCodeSumUpToNUsingMath, highlight: highlightSumUpToNUsingMath } = useHighlightCode();

   const algorithmStateFor = useAlgorithm();
   const algorithmStateMath = useAlgorithm();

   useEffect(() => {
      highlightSumUpToNUsingFor(stringSumUpToNUsingFor);
      highlightSumUpToNUsingMath(stringSumUpToNUsingMath);
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
            <section className='grid grid-cols-2 gap-4'>
               <AlgorithmCard
                  title='Sum Up To N (Using Loop)'
                  description='Calculates sum of numbers from 1 to N using for loop'
                  highlightedCode={highlightedCodeSumUpToNUsingFor}
                  algorithmFn={sumUpToNUsingFor}
                  showWarning={true}
                  input={input}
                  setInput={setInput}
                  algorithmState={algorithmStateFor}
               />
               <AlgorithmCard
                  title='Sum Up To N (Using Math)'
                  description='Calculates sum of numbers from 1 to N using mathematical formula'
                  highlightedCode={highlightedCodeSumUpToNUsingMath}
                  algorithmFn={sumUpToNUsingMath}
                  input={input}
                  setInput={setInput}
                  algorithmState={algorithmStateMath}
               />
            </section>
            <section className='flex items-center gap-2'>
               <label htmlFor='algorithm-input' className='text-gray-700'>
                  N =
               </label>
               <Input id='algorithm-input' type={'number'} value={input} onChange={(e) => setInput(e.target.value)} className='w-32' />
               <Button
                  onClick={() => {
                     algorithmStateFor.handleCalculate(sumUpToNUsingFor, input);
                     algorithmStateMath.handleCalculate(sumUpToNUsingMath, input);
                  }}>
                  Calculate
               </Button>
            </section>
         </div>
      </div>
   );
}
