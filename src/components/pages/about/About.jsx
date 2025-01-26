import Layout from '@/components/layout/Layout';
import ConsumrAILogo from '@/components/ui/ConsumrAILogo';
import React from 'react';
import ChatApplication from './chat-application/ChatApplication';
import Omnibox from './omnibox/Omnibox';

export default function About() {
   return (
      <Layout>
         <div className='max-w-5xl pt-20 mx-auto '>
            <div className='p-4 mt-10 '>
               <div className='bg-white rounded'>
                  <div className='flex justify-center p-4'>
                     <ConsumrAILogo className='w-[140px]' color={'#643fff'} />
                  </div>
                  <div className='p-1 border rounded'>
                     <ChatApplication />
                  </div>
                  <div className='p-1 border rounded'>
                     <Omnibox />
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}
