import { useEffect } from 'react';
import useHighlightCode from '@/hooks/playground/useHighlightCode';
import { sumUpToNUsingFor, sumUpToNUsingMath, stringSumUpToNUsingFor, stringSumUpToNUsingMath } from '@/lib/algorithm/basics';
import AlgorithmCard from './AlgorithmCard';
import AlgorithmInput from './AlgorithmInput';
import useAlgorithm from '@/hooks/playground/algorithm/useAlgorithm';
import Card from '@/components/ui/Card';
import CalculationHistory from './CalculationHistory';
import { useState } from 'react';

const ALGORITHMS = [
   {
      id: 'loop',
      title: 'Sum Up To N (Using Loop)',
      description: 'Calculates sum of numbers from 1 to N using for loop',
      algorithmFn: sumUpToNUsingFor,
      codeString: stringSumUpToNUsingFor,
      showWarning: true,
   },
   {
      id: 'math',
      title: 'Sum Up To N (Using Math)',
      description: 'Calculates sum of numbers from 1 to N using mathematical formula',
      algorithmFn: sumUpToNUsingMath,
      codeString: stringSumUpToNUsingMath,
   },
];

export default function BasicAlgorithm() {
   const [input, setInput] = useState('');

   // Create fixed number of hooks instead of using map
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

   return (
      <div className='p-6 space-y-6'>
         <header>
            <h1 className='mb-4 text-2xl font-bold'>Algorithm Basics</h1>
            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='mb-2 text-lg font-semibold'>Why to learn Algorithms?</h2>
               <p className='text-gray-600'>Let&apos;s see an example of a simple algorithm.</p>
            </div>
         </header>

         <section>
            <h2 className='mb-4 text-lg font-semibold'>Example Algorithm: Sum up to N</h2>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
               {ALGORITHMS.map((algo, index) => (
                  <AlgorithmCard
                     key={algo.id}
                     title={algo.title}
                     description={algo.description}
                     highlightedCode={highlightedCodes[index].highlightedCode}
                     showWarning={algo.showWarning}
                     input={input}
                     setInput={setInput}
                     algorithmState={algorithmStates[index]}
                  />
               ))}

               <Card className='col-span-2'>
                  <AlgorithmInput input={input} setInput={setInput} onCalculate={handleCalculate} showWarning={input > 1000000} />
               </Card>

               {algorithmStates.map((state, index) => {
                  if (algorithmStates[index]?.history && algorithmStates[index]?.history.length > 0) {
                     return (
                        <Card key={ALGORITHMS[index].id}>
                           <CalculationHistory history={algorithmStates[index]?.history} />
                        </Card>
                     );
                  }
               })}
            </div>
         </section>
      </div>
   );
}
