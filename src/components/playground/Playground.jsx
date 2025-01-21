import Layout from '@/components/layout/Layout';

import { PlaygroundSidebar } from './sidebar/Sidebar';
import PlaygroundContextProvider from '@/context/playground/PlaygroundContext';
import PlaygroundContent from './PlayGroundContent';

export default function Playground() {
   return (
      <PlaygroundContextProvider>
         <Layout>
            <div className='flex h-screen pt-16'>
               <aside className='w-1/4'>
                  <PlaygroundSidebar />
               </aside>
               <PlaygroundContent />
            </div>
         </Layout>
      </PlaygroundContextProvider>
   );
}
