import { useContext } from 'react';
import Flex from '@/components/pages/playground/flex/Flex';
import Grid from '@/components/pages/playground/grid/Grid';
import Position from '@/components/pages/playground/position/Position';
import Spacing from '@/components/pages/playground/spacing/Spacing';
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
