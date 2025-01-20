import React from 'react';
import { motion } from 'framer-motion';

// import styles from './FlexDemo.module.css';

function FlexDemo() {
   const [flexDirection, setFlexDirection] = React.useState('row');
   const [justifyContent, setJustifyContent] = React.useState('flex-start');
   const [alignItems, setAlignItems] = React.useState('stretch');

   return (
      <section className='flex flex-col gap-6 p-4 rounded-lg shadow-sm bg-gray-50'>
         <div
            className='flex gap-3 p-4 transition-all duration-300 bg-white border-2 border-gray-200 rounded-lg min-h-64'
            style={{ flexDirection, justifyContent, alignItems }}>
            {ITEMS.map((item) => (
               <motion.div
                  layout={true}
                  key={item.id}
                  className='p-4 text-white transition-shadow rounded-lg shadow-md bg-gradient-to-br from-blue-500 to-blue-600 hover:shadow-lg'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                  <motion.div layout='position' className='font-medium'>
                     {item.label}
                  </motion.div>
               </motion.div>
            ))}
         </div>

         <div className='flex flex-wrap justify-between gap-6 p-6 bg-white rounded-lg shadow-sm'>
            <SelectControl label='Flex Direction' value={flexDirection} onChange={(event) => setFlexDirection(event.target.value)}>
               <option value='row'>row</option>
               <option value='column'>column</option>
               <option value='row-reverse'>row-reverse</option>
               <option value='column-reverse'>column-reverse</option>
            </SelectControl>
            <SelectControl label='Justify Content' value={justifyContent} onChange={(event) => setJustifyContent(event.target.value)}>
               <option value='flex-start'>flex-start</option>
               <option value='flex-end'>flex-end</option>
               <option value='center'>center</option>
               <option value='space-between'>space-between</option>
               <option value='space-around'>space-around</option>
               <option value='space-evenly'>space-evenly</option>
            </SelectControl>
            <SelectControl label='Align Items' value={alignItems} onChange={(event) => setAlignItems(event.target.value)}>
               <option value='stretch'>stretch</option>
               <option value='flex-start'>flex-start</option>
               <option value='flex-end'>flex-end</option>
               <option value='center'>center</option>
            </SelectControl>
         </div>
      </section>
   );
}

function SelectControl({ label, value, onChange, ...delegated }) {
   const id = React.useId();

   return (
      <div className='flex flex-col gap-2'>
         <label htmlFor={id} className='text-sm font-medium text-gray-700'>
            {label}
         </label>
         <select
            id={id}
            className='min-w-[180px] p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block transition-colors hover:border-gray-400'
            value={value}
            onChange={onChange}
            {...delegated}
         />
      </div>
   );
}

const ITEMS = [
   { id: '001', label: 'Hello' },
   { id: '002', label: 'to' },
   { id: '003', label: 'the' },
   { id: '004', label: 'World!' },
];

export default FlexDemo;
