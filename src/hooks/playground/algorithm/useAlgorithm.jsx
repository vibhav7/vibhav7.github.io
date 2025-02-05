import { useState } from 'react';

export default function useAlgorithm() {
   const [result, setResult] = useState(null);
   const [timeTaken, setTimeTaken] = useState(null);
   const [iterations, setIterations] = useState(null);
   const [history, setHistory] = useState([]);

   const handleCalculate = (algorithmFn, input) => {
      const start = performance.now();
      const { result: calculatedResult, iterations: iterationCount } = algorithmFn(Number(input));
      const end = performance.now();
      const timeElapsed = end - start;

      setTimeTaken(timeElapsed);
      setResult(calculatedResult);
      setIterations(iterationCount);

      setHistory((prev) => [
         {
            input,
            result: calculatedResult,
            iterations: iterationCount,
            timeTaken: timeElapsed,
         },
         ...prev,
      ]);
   };

   return {
      result,
      timeTaken,
      iterations,
      history,
      handleCalculate,
   };
}
