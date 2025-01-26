import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

export default function ImageCarousel({ items }) {
   const [api, setApi] = React.useState();
   const [current, setCurrent] = React.useState(0);
   const [count, setCount] = React.useState(0);

   React.useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on('select', () => {
         setCurrent(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   return (
      <div className='w-full max-w-5xl mx-auto'>
         <Carousel setApi={setApi} className='relative'>
            <CarouselContent>
               {items.map((item, index) => (
                  <CarouselItem key={index}>
                     <div className='p-6 shadow-lg bg-card rounded-xl'>
                        <div className='mb-6 space-y-2'>
                           <h3 className='text-2xl font-bold text-primary'>{item.title}</h3>
                           <p className='text-muted-foreground'>{item.description}</p>
                        </div>
                        <div className='overflow-hidden rounded-lg'>
                           <img
                              src={item.image}
                              alt={item.description}
                              className='object-cover w-full h-auto transition-transform duration-300 hover:scale-105'
                           />
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <div className='absolute left-0 -translate-y-1/2 top-1/2'>
               <CarouselPrevious className='flex items-center justify-center' />
            </div>
            <div className='absolute right-0 -translate-y-1/2 top-1/2'>
               <CarouselNext className='flex items-center justify-center' />
            </div>
         </Carousel>
         <div className='py-4 text-sm text-center text-muted-foreground'>
            Slide {current} of {count}
         </div>
      </div>
   );
}
