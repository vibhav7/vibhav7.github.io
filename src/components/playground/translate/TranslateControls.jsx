const TranslateControls = ({ translate, setTranslate }) => {
   return (
      <div className='flex flex-col gap-4'>
         <div className='flex gap-4'>
            <div className='flex items-center gap-2'>
               <label htmlFor='translateX' className='text-sm font-medium'>
                  Translate X:
               </label>
               <input
                  id='translateX'
                  type='range'
                  min='-100'
                  max='100'
                  step='10'
                  value={translate.x}
                  onChange={(e) => setTranslate((prev) => ({ ...prev, x: parseInt(e.target.value) }))}
                  className='w-32'
               />
               <span className='text-sm'>{translate.x}%</span>
            </div>
            <div className='flex items-center gap-2'>
               <label htmlFor='translateY' className='text-sm font-medium'>
                  Translate Y:
               </label>
               <input
                  id='translateY'
                  type='range'
                  min='-100'
                  max='100'
                  step='10'
                  value={translate.y}
                  onChange={(e) => setTranslate((prev) => ({ ...prev, y: parseInt(e.target.value) }))}
                  className='w-32'
               />
               <span className='text-sm'>{translate.y}%</span>
            </div>
         </div>
      </div>
   );
};

export default TranslateControls;
