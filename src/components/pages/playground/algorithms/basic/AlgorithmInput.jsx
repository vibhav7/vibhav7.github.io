import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function AlgorithmInput({ input, setInput, onCalculate, showWarning, maxValue = 1000000 }) {
   return (
      <div className='max-w-3xl mx-auto'>
         <div className='flex items-center justify-center gap-3'>
            <label htmlFor='algorithm-input' className='font-medium text-gray-700'>
               Enter N:
            </label>
            <Input
               id='algorithm-input'
               type='number'
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className='w-32'
               placeholder='Enter a number'
            />
            <Button onClick={onCalculate}>Calculate</Button>
         </div>
         {showWarning && (
            <p className='text-sm text-red-500'>
               Warning: Be careful with large values of input. Your browser may crash due to performance issues of for loop.
            </p>
         )}
         {!showWarning && (
            <p className='text-xs font-medium text-center text-gray-500'>
               Note: try increasing one digit at a time, and compare the time taken by each algorithm. example: 1, 10, 100, 1000, 10000, 100000,
               1000000
            </p>
         )}
      </div>
   );
}
