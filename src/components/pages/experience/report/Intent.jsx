import ImageCarousel from '@/components/ui/ImageCarousel';
import React from 'react';

export default function Intent() {
   const carouselItems = [
      {
         title: 'Intent Report',
         description: 'Based on the keyword, It will show the report',
         image: '/consumr-ai/intent/report-intent.png',
      },
      {
         title: 'Consumer Mindset',
         description: 'What the consumer is thinking about the product or service',
         image: '/consumr-ai/intent/report-intent-qta.png',
      },
      {
         title: 'Trending keywords',
         description: 'Based on the keyword, It will highlight the trending keywords around that keyword and the volume of the keywords',
         image: '/consumr-ai/intent/report-intent-top-keywords.png',
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
