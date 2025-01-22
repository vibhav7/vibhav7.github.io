import SelectControl from '@/components/ui/SelectControl';
import React from 'react';

export default function GridControls({
   justifyItems,
   setJustifyItems,
   justifySelf,
   setJustifySelf,
   alignContent,
   setAlignContent,
   placeContent,
   setPlaceContent,
   placeItems,
   setPlaceItems,
   placeSelf,
   setPlaceSelf,
}) {
   const [isTailwind, setIsTailwind] = React.useState(true);

   const currentJustifyItems = isTailwind ? JUSTIFY_ITEMS.tailwind : JUSTIFY_ITEMS.normal;
   const currentJustifySelf = isTailwind ? JUSTIFY_SELF.tailwind : JUSTIFY_SELF.normal;
   const currentAlignContent = isTailwind ? ALIGN_CONTENT.tailwind : ALIGN_CONTENT.normal;
   const currentPlaceContent = isTailwind ? PLACE_CONTENT.tailwind : PLACE_CONTENT.normal;
   const currentPlaceItems = isTailwind ? PLACE_ITEMS.tailwind : PLACE_ITEMS.normal;
   const currentPlaceSelf = isTailwind ? PLACE_SELF.tailwind : PLACE_SELF.normal;

   return (
      <div className='p-6 space-y-6 bg-white rounded-lg shadow-sm'>
         <div className='mb-2'>
            <button
               onClick={() => setIsTailwind(!isTailwind)}
               className={`px-4 w-[194px] h-10 py-2 font-medium transition-colors border ${isTailwind ? ' text-white  ' : ' text-gray-700 '}`}>
               {isTailwind ? (
                  <div>
                     <img src='/tailwindcss-logotype.svg' alt='Tailwind CSS Logo' className='w-40' />
                  </div>
               ) : (
                  <>
                     <div className='flex items-center gap-2'>
                        <img src='/css-3.svg' alt='CSS Logo' className='w-4' />
                        <span>CSS</span>
                     </div>
                  </>
               )}
            </button>
         </div>
         <div className='grid grid-cols-3 gap-6'>
            <SelectControl label='Justify Items' value={justifyItems} onChange={(event) => setJustifyItems(event.target.value)}>
               {currentJustifyItems.map((item) => (
                  <option key={item.value} value={item.value}>
                     {item.label}
                  </option>
               ))}
            </SelectControl>

            <SelectControl label='Align Content' value={alignContent} onChange={(event) => setAlignContent(event.target.value)}>
               {currentAlignContent.map((item) => (
                  <option key={item.value} value={item.value}>
                     {item.label}
                  </option>
               ))}
            </SelectControl>

            <SelectControl label='Place Content' value={placeContent} onChange={(event) => setPlaceContent(event.target.value)}>
               {currentPlaceContent.map((item) => (
                  <option key={item.value} value={item.value}>
                     {item.label}
                  </option>
               ))}
            </SelectControl>

            <SelectControl label='Place Items' value={placeItems} onChange={(event) => setPlaceItems(event.target.value)}>
               {currentPlaceItems.map((item) => (
                  <option key={item.value} value={item.value}>
                     {item.label}
                  </option>
               ))}
            </SelectControl>

            <div>
               <SelectControl label='Justify Self' value={justifySelf} onChange={(event) => setJustifySelf(event.target.value)}>
                  {currentJustifySelf.map((item) => (
                     <option key={item.value} value={item.value}>
                        {item.label}
                     </option>
                  ))}
               </SelectControl>
               <div className='text-xs text-gray-500'>Note: This style applies to children elements</div>
            </div>
            <div>
               <SelectControl label='Place Self' value={placeSelf} onChange={(event) => setPlaceSelf(event.target.value)}>
                  {currentPlaceSelf.map((item) => (
                     <option key={item.value} value={item.value}>
                        {item.label}
                     </option>
                  ))}
               </SelectControl>
               <div className='text-xs text-gray-500 '>Note: This style applies to children elements</div>
            </div>
         </div>
      </div>
   );
}

const JUSTIFY_ITEMS = {
   normal: [
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
   ],
   tailwind: [
      { label: 'justify-items-start', value: 'start' },
      { label: 'justify-items-end', value: 'end' },
      { label: 'justify-items-center', value: 'center' },
      { label: 'justify-items-stretch', value: 'stretch' },
   ],
};

const JUSTIFY_SELF = {
   normal: [
      { label: 'auto', value: 'auto' },
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
   ],
   tailwind: [
      { label: 'justify-self-auto', value: 'auto' },
      { label: 'justify-self-start', value: 'start' },
      { label: 'justify-self-end', value: 'end' },
      { label: 'justify-self-center', value: 'center' },
      { label: 'justify-self-stretch', value: 'stretch' },
   ],
};

const ALIGN_CONTENT = {
   normal: [
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
      { label: 'space-between', value: 'space-between' },
      { label: 'space-around', value: 'space-around' },
   ],
   tailwind: [
      { label: 'content-start', value: 'start' },
      { label: 'content-end', value: 'end' },
      { label: 'content-center', value: 'center' },
      { label: 'content-stretch', value: 'stretch' },
      { label: 'content-between', value: 'space-between' },
      { label: 'content-around', value: 'space-around' },
   ],
};

const PLACE_CONTENT = {
   normal: [
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
      { label: 'space-between', value: 'space-between' },
      { label: 'space-around', value: 'space-around' },
   ],
   tailwind: [
      { label: 'place-content-start', value: 'start' },
      { label: 'place-content-end', value: 'end' },
      { label: 'place-content-center', value: 'center' },
      { label: 'place-content-stretch', value: 'stretch' },
      { label: 'place-content-between', value: 'space-between' },
      { label: 'place-content-around', value: 'space-around' },
   ],
};

const PLACE_ITEMS = {
   normal: [
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
   ],
   tailwind: [
      { label: 'place-items-start', value: 'start' },
      { label: 'place-items-end', value: 'end' },
      { label: 'place-items-center', value: 'center' },
      { label: 'place-items-stretch', value: 'stretch' },
   ],
};

const PLACE_SELF = {
   normal: [
      { label: 'auto', value: 'auto' },
      { label: 'start', value: 'start' },
      { label: 'end', value: 'end' },
      { label: 'center', value: 'center' },
      { label: 'stretch', value: 'stretch' },
   ],
   tailwind: [
      { label: 'place-self-auto', value: 'auto' },
      { label: 'place-self-start', value: 'start' },
      { label: 'place-self-end', value: 'end' },
      { label: 'place-self-center', value: 'center' },
      { label: 'place-self-stretch', value: 'stretch' },
   ],
};
