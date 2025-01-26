import Layout from '@/components/layout/Layout';
import { FaGithub } from 'react-icons/fa';

export default function References() {
   const references = {
      // design: [
      //    {
      //       title: 'Refactoring UI',
      //       description: 'Learn how to design beautiful user interfaces by focusing on the fundamentals.',
      //       url: 'https://www.refactoringui.com/',
      //       icon: '🎨',
      //    },
      //    {
      //       title: 'Tailwind CSS',
      //       description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
      //       url: 'https://tailwindcss.com/',
      //       icon: '🎯',
      //    },
      // ],
      // development: [
      //    {
      //       title: 'React',
      //       description: 'A JavaScript library for building user interfaces.',
      //       url: 'https://react.dev/',
      //       icon: '⚛️',
      //    },
      //    {
      //       title: 'Vite',
      //       description: 'Next Generation Frontend Tooling.',
      //       url: 'https://vitejs.dev/',
      //       icon: '⚡',
      //    },
      // ],
      // tools: [
      //    {
      //       title: 'GitHub',
      //       description: 'Where the world builds software.',
      //       url: 'https://github.com/',
      //       icon: <FaGithub className='w-6 h-6' />,
      //    },
      //    {
      //       title: 'VS Code',
      //       description: 'Code editing. Redefined.',
      //       url: 'https://code.visualstudio.com/',
      //       icon: '💻',
      //    },
      //    {
      //       title: 'Cursor.sh',
      //       description: 'AI-powered code editor.',
      //       url: 'https://www.cursor.sh/',
      //       icon: '💻',
      //    },
      // ],
      ['Follows']: [
         {
            title: 'Maximilian Schwarzmüller',
            description: 'His blog is a great resource for learning React, Next.js, and more.',
            url: 'https://maximilian-schwarzmueller.com/',
            resource: 'https://www.youtube.com/c/academind',
            // icon: <img src='/images/maximilian-schwarzmueller.png' alt='Maximilian Schwarzmüller' className='w-6 h-6' />,
         },
         {
            title: 'Code Evolution',
            description: 'Very good tutorials for React, Next.js, and more.',
            url: 'https://learn.codevolution.dev/',
            resource: 'https://www.youtube.com/@codevolution',
            // icon: <img src='/images/code-evolution.png' alt='Code Evolution' className='w-6 h-6' />,
         },
         {
            title: 'Josh Comeau',
            description: 'A blog about building things on the web.',
            url: 'https://www.joshwcomeau.com/',
            resource: 'https://www.joyforjs.com/',
            // icon: <img src='/images/josh-comeau.png' alt='Josh Comeau' className='w-6 h-6' />,
         },
         {
            title: 'Refactoring UI',
            description: 'This is a great resource for learning how to design beautiful user interfaces.',
            url: 'https://www.refactoringui.com/',
            resource: 'https://x.com/adamwathan',
            // icon: <img src='/images/adam-and-steve.png' alt='Adam & Steve' className='w-6 h-6' />,
         },
         {
            title: 'Tyler Mcginnis',
            description: 'A blog about React, Next.js, and more.',
            url: 'https://ui.dev/blog',
            resource: 'https://usehooks.com/',
            // icon: <img src='/images/tyler-mcginnis.png' alt='Tyler Mcginnis' className='w-6 h-6' />,
         },
         {
            title: 'Just JavaScript',
            description: 'A blog about JavaScript.',
            url: 'https://justjavascript.com/',
            resource: 'https://www.youtube.com/@justjavascript',
            // icon: <img src='/images/just-javascript.png' alt='Just JavaScript' className='w-6 h-6' />,
         },
         {
            title: 'Bruno Simon',
            description: 'A JavaScript library for building 3D graphics.',
            url: 'https://bruno-simon.com/',
            resource: 'https://threejs-journey.com/',
            // icon: <img src='/images/threejs.png' alt='Three.js' className='w-6 h-6' />,
         },
         {
            title: 'Kent C. Dodds',
            description: 'A blog about React, Next.js, and more.',
            url: 'https://kentcdodds.com/',
            resource: 'https://www.youtube.com/@KentCDodds-vids',
            // icon: <img src='/images/kent-c-dodds.png' alt='Kent C. Dodds' className='w-6 h-6' />,
         },
      ],
   };

   return (
      <Layout>
         <div className='min-h-screen px-4 pt-20 pb-16 bg-gradient-to-b from-gray-50 to-gray-100 sm:px-6 lg:px-8'>
            <div className='p-4 mx-auto mt-10 max-w-7xl'>
               <div className='mb-16 text-center'>
                  <h1 className='mb-4 text-4xl font-bold text-gray-900'>References & Resources</h1>
                  <p className='max-w-2xl mx-auto text-lg text-gray-600'>A curated collection of tools, resources, and inspiration.</p>
               </div>

               {Object.entries(references).map(([category, items]) => (
                  <div key={category} className='mb-16'>
                     <h2 className='mb-8 text-2xl font-bold text-gray-900 capitalize'>{category}</h2>
                     <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {items.map((item) => (
                           <a
                              key={item.title}
                              href={item.url}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='block overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm group hover:shadow-xl'>
                              <div className='p-8'>
                                 <div className='flex items-center justify-between mb-4'>
                                    <div className='text-2xl'>{typeof item.icon === 'string' ? item.icon : item.icon}</div>
                                    <div className='flex gap-2'>
                                       {item.resource && (
                                          <a
                                             title='resource'
                                             href={item.resource}
                                             target='_blank'
                                             rel='noopener noreferrer'
                                             className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                                             onClick={(e) => e.stopPropagation()}>
                                             <svg
                                                className='w-6 h-6 text-gray-400 hover:text-blue-600'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                   strokeLinecap='round'
                                                   strokeLinejoin='round'
                                                   strokeWidth={2}
                                                   d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                                                />
                                             </svg>
                                          </a>
                                       )}
                                       <div title='link' className='transition-opacity duration-300 opacity-0 group-hover:opacity-100'>
                                          <svg
                                             className='w-6 h-6 text-gray-400 hover:text-blue-600'
                                             fill='none'
                                             stroke='currentColor'
                                             viewBox='0 0 24 24'>
                                             <path
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                                strokeWidth={2}
                                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                             />
                                          </svg>
                                       </div>
                                    </div>
                                 </div>
                                 <h3 className='mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600'>
                                    {item.title}
                                 </h3>
                                 <p className='text-gray-600'>{item.description}</p>
                              </div>
                           </a>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Layout>
   );
}
