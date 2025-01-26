import ImageCarousel from '@/components/ui/ImageCarousel';

export default function ChatApplication() {
   const carouselItems = [
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
      <section className='px-4 py-12'>
         <div className='mx-auto max-w-7xl'>
            {/* <div className='mb-12 text-center'>
               <h2 className='mb-4 text-3xl font-bold text-primary'>AI Chat Experience</h2>
               <p className='max-w-2xl mx-auto text-muted-foreground'>
                  Explore our innovative chat application that enables seamless interaction with AI Twins and Agents.
               </p>
            </div> */}
            <ImageCarousel items={carouselItems} />
         </div>
      </section>
   );
}
