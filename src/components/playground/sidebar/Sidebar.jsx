import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

const cssItems = [
   { id: 'flex', label: 'Flex Layout', icon: '📦', path: '/playground/css/flex' },
   { id: 'grid', label: 'Grid Layout', icon: '🎯', path: '/playground/css/grid' },
   { id: 'position', label: 'Position', icon: '📍', path: '/playground/css/position' },
   { id: 'spacing', label: 'Spacing', icon: '↔️', path: '/playground/css/spacing' },
];

const jsItems = [
   { id: 'scope', label: 'Scope', icon: '🔍', path: '/playground/javascript/scope' },
   { id: 'closure', label: 'Closure', icon: '🔒', path: '/playground/javascript/closure' },
   { id: 'hoisting', label: 'Hoisting', icon: '⬆️', path: '/playground/javascript/hoisting' },
   { id: 'this', label: 'This Keyword', icon: '👉', path: '/playground/javascript/this' },
];

const sidebarItems = [
   { id: 'css', label: 'CSS', items: cssItems },
   { id: 'js', label: 'JavaScript', items: jsItems },
];

export function PlaygroundSidebar() {
   const navigate = useNavigate();
   const location = useLocation();
   const [expandedSections, setExpandedSections] = useState(new Set(['css']));

   const handlePanelChange = (path) => {
      navigate(path);
   };

   const toggleSection = (sectionId) => {
      setExpandedSections((prev) => {
         const newSet = new Set(prev);
         if (newSet.has(sectionId)) {
            newSet.delete(sectionId);
         } else {
            newSet.add(sectionId);
         }
         return newSet;
      });
   };

   return (
      <div className='h-full p-4 border-r border-gray-200 bg-gray-50'>
         <h2 className='mb-6 text-xl font-semibold text-gray-800'>Layout Playground</h2>
         <nav className='space-y-2'>
            {sidebarItems.map((section) => (
               <div key={section.id} className='space-y-1'>
                  <button
                     onClick={() => toggleSection(section.id)}
                     className='flex items-center justify-between w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100'>
                     <span className='font-medium'>{section.label}</span>
                     <span className='text-gray-400'>{expandedSections.has(section.id) ? '▼' : '▶'}</span>
                  </button>
                  {expandedSections.has(section.id) && (
                     <div className='ml-4 space-y-1'>
                        {section.items.map((item) => (
                           <button
                              key={item.id}
                              onClick={() => handlePanelChange(item.path)}
                              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                 location.pathname === item.path ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                              }`}>
                              <span className='text-xl'>{item.icon}</span>
                              <span className='font-medium'>{item.label}</span>
                           </button>
                        ))}
                     </div>
                  )}
               </div>
            ))}
         </nav>
      </div>
   );
}
