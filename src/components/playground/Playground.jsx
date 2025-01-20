import Layout from '@/components/layout/Layout';
import Flex from '@/components/playground/flex/Flex';
import { PlaygroundSidebar } from './sidebar/Sidebar';
import PlaygroundContextProvider from '@/context/playground/PlaygroundContext';

export default function Playground() {
   return (
      <PlaygroundContextProvider>
         <Layout>
            <div className='flex items-stretch h-full pt-16 grow'>
               <aside className='w-1/4 h-full '>
                  <PlaygroundSidebar />
               </aside>
               <main className='flex items-center justify-center h-full grow'>
                  <Flex />
               </main>
            </div>
         </Layout>
      </PlaygroundContextProvider>
   );
}
