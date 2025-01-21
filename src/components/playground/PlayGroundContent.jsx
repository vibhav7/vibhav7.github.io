import Layout from '@/components/layout/Layout';
import { useContext } from 'react';
import Flex from '@/components/playground/flex/Flex';
import Grid from '@/components/playground/grid/Grid';
import Position from '@/components/playground/position/Position';
import Spacing from '@/components/playground/spacing/Spacing';
import { PlaygroundSidebar } from './sidebar/Sidebar';
import PlaygroundContextProvider from '@/context/playground/PlaygroundContext';
import { PlaygroundContext } from '@/context/playground/PlaygroundContext';

export default function PlaygroundContent() {
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

   return (
      <main className='grid w-full overflow-auto'>
         <div>{renderContent()}</div>
      </main>
   );
}
