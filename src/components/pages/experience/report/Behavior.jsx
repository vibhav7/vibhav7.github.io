import ImageCarousel from '@/components/ui/ImageCarousel';
import React from 'react';

export default function Behavior() {
   const carouselItems = [
      {
         title: 'Behavior Report',
         description: 'Based on the audience selected, It will show the report',
         image: '/consumr-ai/behavior/report-behavior.png',
      },
      {
         title: 'Brands & Devices',
         description: 'What are the brands and devices that the audience is using',
         image: '/consumr-ai/behavior/report-behavior-btc.png',
      },
      {
         title: 'Work & Education',
         description: 'What are the work and education of the audience',
         image: '/consumr-ai/behavior/report-behavior-wnt.png',
      },
      {
         title: 'Interest',
         description: 'What are the interest of the audience',
         image: '/consumr-ai/behavior/report-behavior-interest.png',
      },
      {
         title: 'Country & City',
         description: 'What are the country and city that the audience is from',
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
