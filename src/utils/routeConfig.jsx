import Flex from '@/components/playground/flex/Flex';
import Grid from '@/components/playground/grid/Grid';
import Position from '@/components/playground/position/Position';
import Spacing from '@/components/playground/spacing/Spacing';
import ComingSoon from '@/components/ui/ComingSoon';
import Translate from '@/components/playground/translate/Translate';

export const ROUTE_BASE = '/playground';

export const routeConfig = {
   css: {
      id: 'css',
      label: 'CSS',
      path: `${ROUTE_BASE}/css`,
      routes: [
         {
            id: 'flex',
            label: 'Flex Layout',
            icon: '📦',
            path: 'flex',
            element: <Flex />,
         },
         {
            id: 'grid',
            label: 'Grid Layout',
            icon: '🎯',
            path: 'grid',
            element: <Grid />,
         },
         {
            id: 'translate',
            label: 'translate',
            icon: '🔍',
            path: 'translate',
            element: <Translate />,
         },
         {
            id: 'position',
            label: 'Position',
            icon: '📍',
            path: 'position',
            element: <Position />,
         },
         {
            id: 'spacing',
            label: 'Spacing',
            icon: '↔️',
            path: 'spacing',
            element: <Spacing />,
         },
      ],
   },
   javascript: {
      id: 'js',
      label: 'JavaScript',
      path: `${ROUTE_BASE}/javascript`,
      routes: [
         {
            id: 'scope',
            label: 'Scope',
            icon: '🔍',
            path: 'scope',
            element: <ComingSoon />,
         },
         {
            id: 'closure',
            label: 'Closure',
            icon: '🔒',
            path: 'closure',
            element: <ComingSoon />,
         },
         {
            id: 'hoisting',
            label: 'Hoisting',
            icon: '⬆️',
            path: 'hoisting',
            element: <ComingSoon />,
         },
         {
            id: 'this',
            label: 'This Keyword',
            icon: '👉',
            path: 'this',
            element: <ComingSoon />,
         },
      ],
   },
};
