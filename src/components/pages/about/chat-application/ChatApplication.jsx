import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';

export default function ChatApplication() {
   const [api, setApi] = React.useState();
   const [current, setCurrent] = React.useState(0);
   const [count, setCount] = React.useState(0);

   React.useEffect(() => {
      if (!api) {
         return;
      }

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on('select', () => {
         setCurrent(api.selectedScrollSnap() + 1);
      });
   }, [api]);

   const imageList = [
      {
         title: 'Chat Application',
         description: 'Created a chat application, to converse with AI Twins and Agents.',
         image: '/consumr-ai/chat-application.png',
      },
      {
         title: 'Structure meeting',
         description: 'Twin and Agent can converse with each other.',
         image: '/consumr-ai/meet-focused-group.png',
      },
   ];

   return (
      <>
         <div className='px-8 mx-auto '>
            <Carousel setApi={setApi} className=''>
               <CarouselContent>
                  {imageList.map((item, index) => (
                     <CarouselItem key={index}>
                        <div>
                           <div>
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                           </div>
                           <div className='flex items-center justify-center'>
                              <img src={item.image} alt={item.description} className='w-full h-auto' />
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
               <CarouselPrevious />
               <CarouselNext />
            </Carousel>
            <div className='py-2 text-sm text-center text-muted-foreground'>
               Slide {current} of {count}
            </div>
         </div>
      </>
   );
}
