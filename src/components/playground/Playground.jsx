import Layout from '@/components/layout/Layout';
import { useContext } from 'react';
import Flex from '@/components/playground/flex/Flex';
import Grid from '@/components/playground/grid/Grid';
import Position from '@/components/playground/position/Position';
import Spacing from '@/components/playground/spacing/Spacing';
import { PlaygroundSidebar } from './sidebar/Sidebar';
import PlaygroundContextProvider from '@/context/playground/PlaygroundContext';
import { PlaygroundContext } from '@/context/playground/PlaygroundContext';

function PlaygroundContent() {
   const { state } = useContext(PlaygroundContext);
   const { selectedSidePanel } = state.playground;

   const renderContent = () => {
      switch (selectedSidePanel) {
         case 'flex':
            return <Flex />;
         case 'grid':
            return <Grid />;
         case 'position':
            return <Position />;
         case 'spacing':
            return <Spacing />;
         default:
            return <Flex />;
      }
   };

   return <main className='flex items-center justify-center h-full grow'>{renderContent()}</main>;
}

export default function Playground() {
   return (
      <PlaygroundContextProvider>
         <Layout>
            <div className='flex items-stretch h-full pt-16 grow'>
               <aside className='w-1/4 h-full'>
                  <PlaygroundSidebar />
               </aside>
               <PlaygroundContent />
            </div>
         </Layout>
      </PlaygroundContextProvider>
   );
}
