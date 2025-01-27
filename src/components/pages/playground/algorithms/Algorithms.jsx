export default function Algorithms() {
   return (
      <div className='p-6'>
         <h1 className='text-2xl font-bold mb-4'>Algorithm Basics</h1>
         <div className='space-y-6'>
            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='text-lg font-semibold mb-2'>What is an Algorithm?</h2>
               <p className='text-gray-600 mb-4'>
                  An algorithm is a step-by-step procedure or formula for solving a problem. It's a finite sequence of well-defined instructions that
                  takes some input, processes it, and produces an output.
               </p>
            </div>

            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='text-lg font-semibold mb-2'>Key Characteristics</h2>
               <ul className='list-disc list-inside text-gray-600 space-y-2'>
                  <li>Input: Takes zero or more inputs</li>
                  <li>Output: Produces one or more outputs</li>
                  <li>Definiteness: Each step is precisely defined</li>
                  <li>Finiteness: Terminates after a finite number of steps</li>
                  <li>Effectiveness: Each step can be performed with finite resources</li>
               </ul>
            </div>

            <div className='p-4 bg-white rounded-lg shadow'>
               <h2 className='text-lg font-semibold mb-2'>Algorithm Analysis</h2>
               <div className='space-y-4'>
                  <div>
                     <h3 className='font-medium text-gray-800 mb-1'>Time Complexity</h3>
                     <p className='text-gray-600'>
                        Measures how the running time increases as the input size grows. Usually expressed in Big O notation (e.g., O(n), O(log n),
                        O(n²)).
                     </p>
                  </div>
                  <div>
                     <h3 className='font-medium text-gray-800 mb-1'>Space Complexity</h3>
                     <p className='text-gray-600'>
                        Measures how much additional memory is needed as the input size grows. Also expressed in Big O notation.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
