import Layout from '@/components/layout/Layout';
import ConsumrAILogo from '@/components/ui/ConsumrAILogo';
import React from 'react';
import ChatApplication from './chat-application/ChatApplication';
import Omnibox from './omnibox/Omnibox';
import Intent from './report/Intent';
import Behavior from './report/Behavior';

export default function Experience() {
   return (
      <Layout>
         <div className='max-w-5xl pt-20 mx-auto'>
            <div className='p-4 mt-10 space-y-16'>
               {/* Header Section */}
               <div className='space-y-6 text-center'>
                  <div>
                     <h1 className='mb-4 text-4xl font-bold'>Professional Experience</h1>
                     <p className='max-w-2xl mx-auto text-lg text-gray-600'>
                        A showcase of my professional journey and key projects across different organizations.
                     </p>
                  </div>
               </div>

               {/* ConsumrAI Section */}
               <div className='space-y-8'>
                  <div className='pb-4 border-b'>
                     <div className='flex items-center gap-4'>
                        <ConsumrAILogo className='w-[140px]' color={'#643fff'} />
                        <h2 className='text-2xl font-bold text-gray-800'>( ProfitWheel Data Technologies )</h2>
                     </div>
                     <p className='mt-2 text-gray-600'>Software Engineer • 2023 - Present</p>
                  </div>
                  <div className='space-y-16'>
                     <div className='p-8 bg-white shadow-sm rounded-xl'>
                        <ChatApplication />
                     </div>
                     <div className='p-8 bg-white shadow-sm rounded-xl'>
                        <Omnibox />
                     </div>
                     <div className='p-8 bg-white shadow-sm rounded-xl'>
                        <Behavior />
                     </div>
                     <div className='p-8 bg-white shadow-sm rounded-xl'>
                        <Intent />
                     </div>
                     <section className='p-8 bg-white shadow-sm rounded-xl'>
                        <h3 className='text-xl font-semibold '>Tech Stack</h3>
                        <p className='text-gray-600 '>
                           React.js, Event streaming, socket.io, shadcn, tailwindCSS, ESLint, Amcharts, AG-Grid, Highcharts, Nivo.
                        </p>
                     </section>
                  </div>
               </div>

               {/* Growisto Section */}
               <div className='space-y-8'>
                  <div className='pb-4 border-b'>
                     <div className='flex items-center gap-4'>
                        <img src='/company-logos/growisto-logo.jpeg' alt='Growisto' className='object-contain h-12' />
                        <h2 className='text-2xl font-bold text-gray-800'>Growisto</h2>
                     </div>
                     <p className='mt-2 text-gray-600'>Software Developer-Frontend • 02/2021 - 02/2022</p>
                  </div>
                  <div className='space-y-8'>
                     <div className='p-8 space-y-6 bg-white shadow-sm rounded-xl'>
                        <section>
                           <h3 className='text-xl font-semibold '>Developed a E-Commerce platform</h3>
                           <p className='text-gray-600 '>Created a responsive e-commerce platform.</p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Worked on creation of a Library to create E-commerce platform</h3>
                           <p className='text-gray-600 '>
                              Developed a library to create E-commerce platform, which can be used to create E-commerce platform. The functionality
                              and a default theme is provided. Theme can be customized as per the requirement.
                           </p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Explained JS concept to the team</h3>
                           <p className='text-gray-600 '>
                              Have taken multiple sessions to explain the JS concepts to the team. basics - scope, hoisting, closures.
                           </p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Migrated the codebase of a checkout flow to Next.js</h3>
                           <p className='text-gray-600 '>
                              Migrated the codebase of a checkout flow to Next.js. With removing the old bugs and improving the codebase.
                           </p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>CDN for shopify store</h3>
                           <p className='text-gray-600 '>Created a responsive checkout CDN in JS for shopify store.</p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Tech Stack</h3>
                           <p className='text-gray-600 '>React.js, Bulma.io, TypeScript.</p>
                        </section>
                     </div>
                  </div>
               </div>

               {/* DhanWise Section */}
               <div className='space-y-8'>
                  <div className='pb-2 border-b'>
                     <div className='flex items-center gap-4'>
                        <img src='/company-logos/dhanwise-logo.jpeg' alt='DhanWise' className='object-contain h-12' />
                        <h2 className='text-2xl font-bold text-gray-800'>DhanWise</h2>
                     </div>
                     <p className='mt-2 text-gray-600'>Frontend Developer • 02/2020 - 01/2021</p>
                  </div>
                  <div className='space-y-8'>
                     <div className='p-8 space-y-6 bg-white shadow-sm rounded-xl'>
                        <section className='space-y-2'>
                           <h3 className='text-xl font-semibold'>Personal finance/investment responsive web app using Next.js</h3>
                           <div>
                              <p className='text-gray-600'>Implemented css using tailwindCSS, interfaced with the backend using REST APIS</p>
                              <p className='text-gray-600'>
                                 Created a Messaging app system using Twilio API. Where user can chat with their assigned financial advisor.
                              </p>
                           </div>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Created a B2B e-commerce platform</h3>
                           <p className='text-gray-600 '>Created a B2B e-commerce platform for a company. Responsive and scalable.</p>
                        </section>
                        <section>
                           <h3 className='text-xl font-semibold '>Tech Stack</h3>
                           <p className='text-gray-600 '>
                              Next.js, React.js, TailwindCSS, SCSS, Twilio Chat API, REST APIs, Ant Design, Material UI.
                           </p>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
}
