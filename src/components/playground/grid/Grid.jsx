import React from 'react';
import { motion } from 'framer-motion';
import GridControls from './grid-controls/GridControls';

const GRID_ITEMS = [
   { id: '001', label: 'Item 1' },
   { id: '002', label: 'Item 2' },
   { id: '003', label: 'Item 3' },
   { id: '004', label: 'Item 4' },
   { id: '005', label: 'Item 5' },
   { id: '006', label: 'Item 6' },
];

export default function Grid() {
   const [columns, setColumns] = React.useState(3);
   const [gap, setGap] = React.useState(4);
   const [justifyItems, setJustifyItems] = React.useState('start');
   const [justifySelf, setJustifySelf] = React.useState('auto');
   const [alignContent, setAlignContent] = React.useState('start');
   const [placeContent, setPlaceContent] = React.useState('start');
   const [placeItems, setPlaceItems] = React.useState('start');
   const [placeSelf, setPlaceSelf] = React.useState('auto');

   return (
      <section className='flex flex-col gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
         <div className='text-center'>
            <h2 className='text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text'>Grid Layout Playground</h2>
            <p className='max-w-2xl mx-auto mt-3 text-gray-600'>
               Experiment with CSS Grid properties in real-time. Adjust grid columns, gaps, and alignment to understand grid layout behavior.
            </p>
         </div>

         <GridControls
            justifyItems={justifyItems}
            setJustifyItems={setJustifyItems}
            justifySelf={justifySelf}
            setJustifySelf={setJustifySelf}
            alignContent={alignContent}
            setAlignContent={setAlignContent}
            placeContent={placeContent}
            setPlaceContent={setPlaceContent}
            placeItems={placeItems}
            setPlaceItems={setPlaceItems}
            placeSelf={placeSelf}
            setPlaceSelf={setPlaceSelf}
         />

         <section className='relative gap-6 rounded-lg shadow-sm bg-gray-50'>
            <div
               className='grid p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-96'
               style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                  gap: `${gap * 0.25}rem`,
                  justifyItems,
                  alignContent,
                  placeContent,
                  placeItems,
               }}>
               {GRID_ITEMS.map((item) => (
                  <motion.div
                     key={item.id}
                     layout={true}
                     className='font-medium text-gray-700 bg-gray-100 border rounded-lg'
                     style={{
                        justifySelf: item.id === '001' ? justifySelf : 'auto',
                        placeSelf: item.id === '001' ? placeSelf : 'auto',
                     }}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     <motion.div layout='position' className='p-4'>
                        {item.label}
                     </motion.div>
                  </motion.div>
               ))}
            </div>
         </section>
      </section>
   );
}
