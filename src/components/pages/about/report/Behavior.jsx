import ImageCarousel from '@/components/ui/ImageCarousel';
import React from 'react';

export default function Behavior() {
   const carouselItems = [
      {
         title: 'Behavior Report',
         description: 'Based on the keyword, It will show the report',
         image: '/consumr-ai/behavior/report-behavior.png',
      },
      {
         title: 'Consumer Mindset',
         description: 'What the consumer is thinking about the product or service',
         image: '/consumr-ai/behavior/report-behavior-btc.png',
      },
      {
         title: 'Trending keywords',
         description: 'Based on the keyword, It will highlight the trending keywords around that keyword and the volume of the keywords',
         image: '/consumr-ai/behavior/report-behavior-wnt.png',
      },
      {
         title: 'Trending keywords',
         description: 'Based on the keyword, It will highlight the trending keywords around that keyword and the volume of the keywords',
         image: '/consumr-ai/behavior/report-behavior-interest.png',
      },
      {
         title: 'Trending keywords',
         description: 'Based on the keyword, It will highlight the trending keywords around that keyword and the volume of the keywords',
         image: '/consumr-ai/behavior/report-behavior-country-city.png',
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
