import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AlgorithmInput({
   input,
   setInput,
   onCalculate,
   showWarning,
   maxValue = 1000000,
   message = `1 → 10 → 100 → 1,000 → 10,000 → 100,000 → 1,000,000`,
}) {
   return (
      <div className='max-w-3xl mx-auto space-y-4'>
         <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3'>
            <label htmlFor='algorithm-input' className='font-medium text-gray-700 min-w-[80px] text-center sm:text-right'>
               Enter N:
            </label>
            <Input
               id='algorithm-input'
               type='number'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className='w-40 text-center'
               placeholder='Enter a number'
               min={1}
               max={maxValue}
            />
            <Button onClick={onCalculate} className='px-6 py-2 transition-transform active:scale-95'>
               Calculate
            </Button>
         </div>

         <div className='text-center'>
            {showWarning ? (
               <div className='p-3 border border-red-200 rounded-lg animate-fade-in bg-red-50'>
                  <p className='flex items-center justify-center gap-2 text-sm text-red-600'>
                     <svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 20 20' fill='currentColor'>
                        <path
                           fillRule='evenodd'
                           d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                           clipRule='evenodd'
                        />
                     </svg>
                     Warning: Be careful with large values of input. Your browser may crash due to for loop.
                  </p>
               </div>
            ) : (
               <div className='p-3 border border-gray-200 rounded-lg bg-gray-50'>
                  <p className='text-sm text-gray-600'>
                     Try increasing one digit at a time to compare algorithm performance:
                     <br />
                     <span className='font-mono text-gray-500'>{message}</span>
                  </p>
               </div>
            )}
         </div>
      </div>
   );
}
