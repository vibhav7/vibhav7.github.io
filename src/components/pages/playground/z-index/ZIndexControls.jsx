import SelectControl from '../../../ui/SelectControl';

export default function ZIndexControls({ zIndexValues, isolation, onZIndexChange, onIsolationChange }) {
   const isolationOptions = [
      { value: 'auto', label: 'auto' },
      { value: 'isolate', label: 'isolate' },
   ];

   return (
      <div className='p-4 space-y-6 border border-gray-200 rounded-lg'>
         <div>
            <h3 className='mb-4 text-lg font-semibold'>Z-Index Controls</h3>
            <div className='space-y-4'>
               <div>
                  <label className='block mb-1 text-sm font-medium text-gray-700'>Red Box Z-Index</label>
                  <input
                     type='range'
                     min='-1'
                     max='10'
                     value={zIndexValues.red}
                     onChange={(e) => onZIndexChange('red', parseInt(e.target.value))}
                     className='w-full'
                  />
                  <span className='text-sm text-gray-500'>Value: {zIndexValues.red}</span>
               </div>

               <div>
                  <label className='block mb-1 text-sm font-medium text-gray-700'>Blue Box Z-Index</label>
                  <input
                     type='range'
                     min='-1'
                     max='10'
                     value={zIndexValues.blue}
                     onChange={(e) => onZIndexChange('blue', parseInt(e.target.value))}
                     className='w-full'
                  />
                  <span className='text-sm text-gray-500'>Value: {zIndexValues.blue}</span>
               </div>

               <div>
                  <label className='block mb-1 text-sm font-medium text-gray-700'>Green Box Z-Index</label>
                  <input
                     type='range'
                     min='-1'
                     max='10'
                     value={zIndexValues.green}
                     onChange={(e) => onZIndexChange('green', parseInt(e.target.value))}
                     className='w-full'
                  />
                  <span className='text-sm text-gray-500'>Value: {zIndexValues.green}</span>
               </div>
            </div>
         </div>

         {/* <div>
            <h3 className='mb-4 text-lg font-semibold'>Isolation Property</h3>
            <SelectControl value={isolation} onChange={(value) => onIsolationChange(value)} label='Container Isolation'>
               {isolationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                     {option.label}
                  </option>
               ))}
            </SelectControl>
            <p className='mt-2 text-sm text-gray-500'>
               The isolation property creates a new stacking context, affecting how z-index works for child elements.
            </p>
         </div> */}
      </div>
   );
}
