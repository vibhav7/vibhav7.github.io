import { useState } from 'react';

export default function useAlgorithm() {
   const [result, setResult] = useState(null);
   const [timeTaken, setTimeTaken] = useState(null);
   const [history, setHistory] = useState([]);

   const handleCalculate = (algorithmFn, input) => {
      const start = performance.now();
      const calculatedResult = algorithmFn(Number(input));
      const end = performance.now();
      const timeElapsed = end - start;

      setTimeTaken(timeElapsed);
      setResult(calculatedResult);

      setHistory((prev) => [
         {
            input,
            result: calculatedResult,
            timeTaken: timeElapsed,
         },
         ...prev,
      ]);
   };

   return {
      result,
      timeTaken,
      history,
      handleCalculate,
   };
}
