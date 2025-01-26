import ImageCarousel from '@/components/ui/ImageCarousel';
import React from 'react';

export default function Omnibox() {
   const carouselItems = [
      {
         title: 'Omnibox',
         description: 'Created a omnibox were user can search for 1st party, 3rd party, keywords and more.',
         image: '/consumr-ai/omnibox/omnibox-default.png',
      },
      {
         title: 'All',
         description: 'It suggest recommendation based on the organization selected.',
         image: '/consumr-ai/omnibox/omnibox-all.png',
      },
      {
         title: '3rd party',
         description: 'It suggest recommendation based on the organization selected and what the user is searching for.',
         image: '/consumr-ai/omnibox/omnibox-3rd-party.png',
      },
      {
         title: 'Keyword',
         description: 'It suggest recommendation based on the organization selected and what the user is searching for.',
         image: '/consumr-ai/omnibox/omnibox-keyword.png',
      },
   ];
   return (
      <section className='px-4 py-12'>
         <div className='mx-auto max-w-7xl'>
            <ImageCarousel items={carouselItems} />
         </div>
      </section>
   );
}
