import Layout from '@/components/layout/Layout';
import ConsumrAILogo from '@/components/ui/ConsumrAILogo';
import React from 'react';

export default function About() {
   return (
      <Layout>
         <div className='max-w-5xl pt-20 mx-auto bg-white'>
            <div className='p-4 mt-10'>
               <div className='flex justify-end w-full'>
                  <img src='/adventure.svg' alt='Profile' className='h-32 ' />
               </div>
               <div className='flex justify-center w-full border-t border-l border-gray-300 border-dashed min-h-px'>
                  <div className='relative top-0 -translate-y-full'>
                     <ConsumrAILogo className='w-[140px]' color={'#643fff'} />
                  </div>
               </div>
               <div className='min-h-screen border-l border-gray-300 border-dashed'>
                  <div>What I have done there</div>
               </div>
            </div>
         </div>
      </Layout>
   );
}
