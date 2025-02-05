import { useState } from 'react';
import PowerOfTwoChecker from './PowerOfTwoChecker';
import { Tooltip } from '@/components/ui/Tooltip';

export default function MathSeries() {
   const tabs = [
      { id: 'power', label: 'Power of Two', isNotStarted: false },
      { id: 'fibonacci', label: 'Fibonacci Series', isNotStarted: true },
      { id: 'prime', label: 'Prime Numbers', isNotStarted: true },
      { id: 'factorial', label: 'Factorial', isNotStarted: true },
   ];
   const [activeTab, setActiveTab] = useState(tabs[0].id);

   return (
      <div>
         <div className='sticky top-0 left-0 z-10 w-full'>
            <div className='p-4 bg-white border-b shadow-sm'>
               <div className='flex space-x-1'>
                  {tabs.map((tab) => (
                     <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                           activeTab === tab.id ? 'bg-purple-100 text-purple-700 shadow-sm' : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                        }`}>
                        {tab.label}
                        {/* {tab.isNotStarted && <span className='inline-block w-2 h-2 ml-2 rounded-full bg-amber-400' />} */}
                        {(tab.isWIP || tab.isNotStarted) && (
                           <Tooltip content={tab.isWIP ? 'In Progress' : 'Not Started'}>
                              <span
                                 className={`inline-block ml-2 h-2 w-2 rounded-full ${
                                    tab.isWIP
                                       ? 'bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse'
                                       : 'bg-gradient-to-r from-red-400 to-pink-400'
                                 }`}
                              />
                           </Tooltip>
                        )}
                     </button>
                  ))}
               </div>
            </div>
         </div>
         <div className='min-h-screen p-6'>
            {activeTab === 'fibonacci' && (
               <div className='p-4 text-center text-gray-600'>
                  <p className='text-lg font-medium'>Fibonacci Series - Not Started</p>
                  <p className='mt-2'>This feature is currently under development.</p>
               </div>
            )}
            {activeTab === 'prime' && (
               <div className='p-4 text-center text-gray-600'>
                  <p className='text-lg font-medium'>Prime Numbers - Not Started</p>
                  <p className='mt-2'>This feature is currently under development.</p>
               </div>
            )}
            {activeTab === 'power' && <PowerOfTwoChecker />}
            {activeTab === 'factorial' && (
               <div className='p-4 text-center text-gray-600'>
                  <p className='text-lg font-medium'>Factorial - Not Started</p>
                  <p className='mt-2'>This feature is currently under development.</p>
               </div>
            )}
         </div>
      </div>
   );
}
