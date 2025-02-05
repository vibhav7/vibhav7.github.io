import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { routeConfig } from '@/utils/routeConfig.jsx';
import { Tooltip } from '@/components/ui/Tooltip';

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
      <div className='h-[calc(100vh-80px)] overflow-auto p-4 border-r border-gray-200 bg-gray-50'>
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
                                 <div className='flex items-center gap-2'>
                                    <span className='font-medium whitespace-nowrap'>{item.label}</span>
                                    {(item.isWIP || item.isNotStarted) && (
                                       <Tooltip content={item.isWIP ? 'In Progress' : 'Not Started'}>
                                          <div
                                             className={`h-2 w-2 rounded-full ${
                                                item.isWIP
                                                   ? 'bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse'
                                                   : 'bg-gradient-to-r from-red-400 to-pink-400'
                                             }`}
                                          />
                                       </Tooltip>
                                    )}
                                 </div>
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
