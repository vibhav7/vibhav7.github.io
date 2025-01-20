import { useContext } from 'react';

import { PlaygroundContext } from '@/context/playground/PlaygroundContext';

const sidebarItems = [
   { id: 'flex', label: 'Flex Layout', icon: '📦' },
   { id: 'grid', label: 'Grid Layout', icon: '🎯' },
   { id: 'position', label: 'Position', icon: '📍' },
   { id: 'spacing', label: 'Spacing', icon: '↔️' },
];

export function PlaygroundSidebar() {
   const { state, dispatch } = useContext(PlaygroundContext);
   const { selectedSidePanel } = state.playground;

   const handlePanelChange = (panelId) => {
      dispatch({ type: 'SET_PLAYGROUND_STATE', payload: panelId });
   };

   return (
      <div className='h-full p-4 border-r border-gray-200 bg-gray-50'>
         <h2 className='mb-6 text-xl font-semibold text-gray-800'>Layout Playground</h2>
         <nav className='space-y-2'>
            {sidebarItems.map((item) => (
               <button
                  key={item.id}
                  onClick={() => handlePanelChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                     selectedSidePanel === item.id ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                  }`}>
                  <span className='text-xl'>{item.icon}</span>
                  <span className='font-medium'>{item.label}</span>
               </button>
            ))}
         </nav>
      </div>
   );
}
