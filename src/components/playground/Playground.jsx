import Layout from '@/components/layout/Layout';
import { Outlet } from 'react-router';
import { PlaygroundSidebar } from './sidebar/Sidebar';

export default function Playground() {
   return (
      <Layout>
         <div className='flex h-screen pt-16'>
            <aside className='w-1/4'>
               <PlaygroundSidebar />
            </aside>
            <main className='grid w-full overflow-auto'>
               <Outlet />
            </main>
         </div>
      </Layout>
   );
}
