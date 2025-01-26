import Layout from '@/components/layout/Layout';
import { Connector } from '@/components/ui/Connector';

export default function About() {
   return (
      <Layout>
         <div className='px-10 pt-20'>
            <div className='bg-gray-50'>
               {/* <Hero /> */}
               <section className='mt-5'>
                  <div className='isolate'>
                     <div className='relative z-10 flex justify-between w-full bg-white'>
                        {/* <div className='relative z-20 bg-white'>Point a</div> */}
                        <img src='/adventure.svg' alt='Profile' className='h-32 ' />
                        <div className='relative z-20 bg-white'>Point b</div>
                     </div>
                     <div className='relative'>
                        <Connector direction='horizontal' />
                     </div>
                  </div>

                  <div className='mt-10'>
                     <div className='relative flex flex-col justify-between w-full h-96'>
                        <Connector direction='vertical' strokeDasharray='20,20' />
                        <div className='relative z-20 bg-white'>Point c</div>
                        <div className='relative z-20 bg-white'>Point d</div>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </Layout>
   );
}
