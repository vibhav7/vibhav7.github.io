import Flex from '@/components/pages/playground/flex/Flex';
import Grid from '@/components/pages/playground/grid/Grid';
import Position from '@/components/pages/playground/position/Position';
import Spacing from '@/components/pages/playground/spacing/Spacing';
import ComingSoon from '@/components/ui/ComingSoon';
import Translate from '@/components/pages/playground/translate/Translate';
import ZIndex from '@/components/pages/playground/z-index/ZIndex';
import Algorithms from '@/components/pages/playground/algorithms/Algorithms';

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
            id: 'z-index',
            label: 'z-index',
            icon: '🔍',
            path: 'z-index',
            element: <ZIndex />,
            isWIP: true,
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
   algorithms: {
      id: 'algorithms',
      label: 'Algorithms',
      path: `${ROUTE_BASE}/algorithms`,
      routes: [
         {
            id: 'basics',
            label: 'Algorithm Basics',
            icon: '📚',
            path: 'basics',
            element: <Algorithms />,
            isWIP: true,
         },
         {
            id: 'searching',
            label: 'Searching',
            icon: '🔍',
            path: 'searching',
            element: <ComingSoon />,
         },
         {
            id: 'sorting',
            label: 'Sorting',
            icon: '📊',
            path: 'sorting',
            element: <ComingSoon />,
         },
         {
            id: 'recursion',
            label: 'Recursion',
            icon: '🔄',
            path: 'recursion',
            element: <ComingSoon />,
         },
      ],
   },
};
