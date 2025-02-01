import { useEffect } from 'react';
import useHighlightCode from '@/hooks/playground/useHighlightCode';
import { sumUpToNUsingFor, sumUpToNUsingMath } from '@/lib/algorithm/basics';

import AlgorithmCard from './AlgorithmCard';

export default function BasicAlgorithm() {
   const { highlightedCode: highlightedCodeSumUpToNUsingFor, highlight: highlightSumUpToNUsingFor } = useHighlightCode();
   const { highlightedCode: highlightedCodeSumUpToNUsingMath, highlight: highlightSumUpToNUsingMath } = useHighlightCode();

   useEffect(() => {
      highlightSumUpToNUsingFor(sumUpToNUsingFor.toString());
      highlightSumUpToNUsingMath(sumUpToNUsingMath.toString());
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
                  title='Sum Up To N (Using Math)'
                  description='Calculates sum of numbers from 1 to N using mathematical formula'
                  highlightedCode={highlightedCodeSumUpToNUsingMath}
                  algorithmFn={sumUpToNUsingMath}
                  inputLabel='N'
               />

               <AlgorithmCard
                  title='Sum Up To N (Using Loop)'
                  description='Calculates sum of numbers from 1 to N using for loop'
                  highlightedCode={highlightedCodeSumUpToNUsingFor}
                  algorithmFn={sumUpToNUsingFor}
                  inputLabel='N'
               />
            </section>
         </div>
      </div>
   );
}
