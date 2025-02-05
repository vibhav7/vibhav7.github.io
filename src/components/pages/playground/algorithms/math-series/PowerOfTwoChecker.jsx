import { useEffect } from 'react';
import useHighlightCode from '@/hooks/playground/useHighlightCode';
import { isPowerOfTwoLogarithmic, isPowerOfTwo, stringIsPowerOfTwoLogarithmic, stringIsPowerOfTwo } from '@/lib/algorithm/powerOfTwo';
import AlgorithmCard from '../basic/AlgorithmCard';
import AlgorithmInput from '../basic/AlgorithmInput';
import useAlgorithm from '@/hooks/playground/algorithm/useAlgorithm';
import Card from '@/components/ui/Card';
import CalculationHistory from '../basic/CalculationHistory';
import { useState } from 'react';

const ALGORITHMS = [
   {
      id: 'linear',
      title: 'Power of Two Check (Logarithmic)',
      description: 'Checks if a number is power of two by repeatedly dividing by 2',
      algorithmFn: isPowerOfTwoLogarithmic,
      codeString: stringIsPowerOfTwoLogarithmic,
      timeComplexity: 'O(log n)',
      tooltip: 'Time complexity O(log n) means the execution time increases logarithmically with the input size.',
   },
   {
      id: 'logarithmic',
      title: 'Power of Two Check (Bitwise)',
      description: 'Checks if a number is power of two using efficient bitwise AND operation',
      algorithmFn: isPowerOfTwo,
      codeString: stringIsPowerOfTwo,
      timeComplexity: 'O(1)',
      tooltip: 'Time complexity O(1) means the execution time is constant and does not depend on the input size.',
   },
];

export default function PowerOfTwoChecker() {
   const [input, setInput] = useState('');

   // Create fixed number of hooks
   const algorithmStates = [useAlgorithm(), useAlgorithm()];
   const highlightedCodes = [useHighlightCode(), useHighlightCode()];

   // Highlight all algorithm codes on component mount
   useEffect(() => {
      ALGORITHMS.forEach((algo, index) => {
         highlightedCodes[index].highlight(algo.codeString);
      });
   }, []);

   const handleCalculate = () => {
      ALGORITHMS.forEach((algo, index) => {
         algorithmStates[index].handleCalculate(algo.algorithmFn, input);
      });
   };

   const showWarning = input > 1000000000;

   return (
      <div className='p-6 space-y-6'>
         <header>
            <h1 className='mb-4 text-2xl font-bold'>Power of Two Checker</h1>
            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='mb-2 text-lg font-semibold'>Different Approaches to Check Power of Two</h2>
               <p className='text-gray-600'>Let&apos;s compare different algorithms to check if a number is a power of two.</p>
            </div>
         </header>

         <section>
            <h2 className='mb-4 text-lg font-semibold'>Compare Time Complexities</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
               {ALGORITHMS.map((algo, index) => (
                  <AlgorithmCard
                     key={algo.id}
                     title={algo.title}
                     description={algo.description}
                     highlightedCode={highlightedCodes[index].highlightedCode}
                     showWarning={showWarning}
                     input={input}
                     setInput={setInput}
                     timeComplexity={algo.timeComplexity}
                     tooltip={algo.tooltip}
                     algorithmState={algorithmStates[index]}
                  />
               ))}

               <Card className='col-span-2'>
                  <AlgorithmInput
                     message={`2 -> 4 -> 64 -> 128 -> 256 -> 512 -> 1024 -> 2048 -> 4096 -> 8192 -> 16384 -> 32768 -> 65536 -> 131072 -> 262144 -> 524288 -> 1048576`}
                     input={input}
                     setInput={setInput}
                     onCalculate={handleCalculate}
                     showWarning={showWarning}
                  />
               </Card>

               {algorithmStates.map((state, index) => {
                  if (state?.history && state.history.length > 0) {
                     return (
                        <Card key={ALGORITHMS[index].id}>
                           <div className='space-y-4'>
                              <h3 className='text-lg font-semibold'>{ALGORITHMS[index].title} - Results</h3>
                              <CalculationHistory history={state.history} />
                           </div>
                        </Card>
                     );
                  }
                  return null;
               })}
            </div>
         </section>
      </div>
   );
}
