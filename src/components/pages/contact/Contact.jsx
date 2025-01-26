import Layout from '@/components/layout/Layout';
import { FaGithub, FaTwitter, FaStackOverflow, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
   const socialLinks = [
      {
         name: 'GitHub',
         icon: <FaGithub className='w-8 h-8' />,
         url: 'https://github.com/vibhav7',
         color: 'hover:text-gray-800',
      },
      {
         name: 'Twitter',
         icon: <FaTwitter className='w-8 h-8' />,
         url: 'https://x.com/Vib_hav7',
         color: 'hover:text-blue-400',
      },
      {
         name: 'Stack Overflow',
         icon: <FaStackOverflow className='w-8 h-8' />,
         url: 'https://stackoverflow.com/users/13056710/vibhav',
         color: 'hover:text-orange-500',
      },
      {
         name: 'WhatsApp',
         icon: <FaWhatsapp className='w-8 h-8' />,
         url: 'https://wa.me/+918092939138',
         color: 'hover:text-green-500',
      },
   ];

   return (
      <Layout>
         <div className='min-h-screen px-4 pt-20 bg-gradient-to-b from-gray-50 to-gray-100 sm:px-6 lg:px-8'>
            <div className='max-w-3xl mx-auto'>
               <div className='mb-12 text-center'>
                  <h1 className='mb-4 text-4xl font-bold text-gray-900'>Let's Connect!</h1>
                  <p className='text-lg text-gray-600'>Feel free to reach out through any of these platforms</p>
               </div>

               <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  {socialLinks.map((link) => (
                     <a
                        key={link.name}
                        href={link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`flex items-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl ${link.color}`}>
                        <div className='mr-4'>{link.icon}</div>
                        <div>
                           <h2 className='text-xl font-semibold text-gray-800'>{link.name}</h2>
                           <p className='text-gray-600'>Connect with me on {link.name}</p>
                        </div>
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </Layout>
   );
}
