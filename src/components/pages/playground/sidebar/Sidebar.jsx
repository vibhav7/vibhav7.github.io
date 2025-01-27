import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { routeConfig } from '@/utils/routeConfig.jsx';

const sidebarItems = [
   { id: 'css', label: 'CSS', items: routeConfig.css.routes },
   { id: 'javascript', label: 'JavaScript', items: routeConfig.javascript.routes },
   { id: 'algorithms', label: 'Algorithms', items: routeConfig.algorithms.routes },
];

export function PlaygroundSidebar() {
   const navigate = useNavigate();
   const location = useLocation();
   const [expandedSections, setExpandedSections] = useState(new Set(['css']));

   const handlePanelChange = (sectionPath, itemPath) => {
      navigate(`${sectionPath}/${itemPath}`);
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
                        {section.items.map((item) => {
                           console.log(item);
                           // return null;
                           const itemPath = item.path || '';
                           const sectionPath = routeConfig[section.id].path;
                           const fullPath = `${sectionPath}/${itemPath}`;
                           return (
                              <button
                                 key={item.id}
                                 onClick={() => handlePanelChange(sectionPath, itemPath)}
                                 className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                    location.pathname === fullPath ? 'bg-blue-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                                 }`}>
                                 <span className='text-xl'>{item.icon}</span>
                                 <span className='font-medium'>{item.label}</span>
                                 {item.isWIP && <span className='px-1.5 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded'>WIP</span>}
                              </button>
                           );
                        })}
                     </div>
                  )}
               </div>
            ))}
         </nav>
      </div>
   );
}
