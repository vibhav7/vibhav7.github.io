import SelectControl from '@/components/ui/SelectControl';
import TailwindVsCssButton from '@/components/ui/TailwindVsCssButton';
import React from 'react';

export default function FlexControls({ flexDirection, setFlexDirection, justifyContent, setJustifyContent, alignItems, setAlignItems }) {
   const [isTailwind, setIsTailwind] = React.useState(true);
   const currentDirections = isTailwind ? FLEX_DIRECTIONS.tailwind : FLEX_DIRECTIONS.normal;
   const currentJustifyContents = isTailwind ? JUSTIFY_CONTENTS.tailwind : JUSTIFY_CONTENTS.normal;
   const currentAlignItems = isTailwind ? ALIGN_ITEMS.tailwind : ALIGN_ITEMS.normal;
   return (
      <div className='p-6 space-y-6 bg-white rounded-lg shadow-sm'>
         <div className='flex items-center w-full gap-3 mb-2'>
            <TailwindVsCssButton isTailwind={isTailwind} setIsTailwind={setIsTailwind} />
         </div>
         <div className='flex flex-wrap justify-between gap-6'>
            <SelectControl label='Flex Direction' value={flexDirection} onChange={(event) => setFlexDirection(event.target.value)}>
               {currentDirections.map((direction) => (
                  <option key={direction.value} value={direction.value}>
                     {direction.label}
                  </option>
               ))}
            </SelectControl>
            <SelectControl label='Justify Content' value={justifyContent} onChange={(event) => setJustifyContent(event.target.value)}>
               {currentJustifyContents.map((content) => (
                  <option key={content.value} value={content.value}>
                     {content.label}
                  </option>
               ))}
            </SelectControl>
            <SelectControl label='Align Items' value={alignItems} onChange={(event) => setAlignItems(event.target.value)}>
               {currentAlignItems.map((item) => (
                  <option key={item.value} value={item.value}>
                     {item.label}
                  </option>
               ))}
            </SelectControl>
         </div>
      </div>
   );
}

// Define constants for options
const FLEX_DIRECTIONS = {
   normal: [
      { label: 'row', value: 'row' },
      { label: 'column', value: 'column' },
      { label: 'row-reverse', value: 'row-reverse' },
      { label: 'column-reverse', value: 'column-reverse' },
   ],
   tailwind: [
      { label: 'flex-row', value: 'row' },
      { label: 'flex-col', value: 'column' },
      { label: 'flex-row-reverse', value: 'row-reverse' },
      { label: 'flex-col-reverse', value: 'column-reverse' },
   ],
};
const JUSTIFY_CONTENTS = {
   normal: [
      { label: 'flex-start', value: 'flex-start' },
      { label: 'flex-end', value: 'flex-end' },
      { label: 'center', value: 'center' },
      { label: 'space-between', value: 'space-between' },
      { label: 'space-around', value: 'space-around' },
      { label: 'space-evenly', value: 'space-evenly' },
   ],
   tailwind: [
      { label: 'justify-normal', value: 'normal' },
      { label: 'justify-start', value: 'flex-start' },
      { label: 'justify-end', value: 'flex-end' },
      { label: 'justify-center', value: 'center' },
      { label: 'justify-between', value: 'space-between' },
      { label: 'justify-around', value: 'space-evenly' },
      { label: 'justify-stretch', value: 'stretch' },
   ],
};
const ALIGN_ITEMS = {
   normal: [
      { label: 'stretch', value: 'stretch' },
      { label: 'flex-start', value: 'flex-start' },
      { label: 'flex-end', value: 'flex-end' },
      { label: 'center', value: 'center' },
   ],
   tailwind: [
      { label: 'items-start', value: 'flex-start' },
      { label: 'items-end', value: 'flex-end' },
      { label: 'items-center', value: 'center' },
      { label: 'items-baseline', value: 'baseline' },
      { label: 'items-stretch', value: 'stretch' },
   ],
};
