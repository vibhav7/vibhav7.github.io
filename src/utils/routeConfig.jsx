import Flex from '@/components/pages/playground/flex/Flex';
import Grid from '@/components/pages/playground/grid/Grid';
import Position from '@/components/pages/playground/position/Position';
import Spacing from '@/components/pages/playground/spacing/Spacing';
import ComingSoon from '@/components/ui/ComingSoon';
import Translate from '@/components/pages/playground/translate/Translate';
import ZIndex from '@/components/pages/playground/z-index/ZIndex';
import BasicAlgorithm from '@/components/pages/playground/algorithms/basic/BasicAlgorithm';
import MathSeries from '@/components/pages/playground/algorithms/math-series/MathSeries';

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
            isNotStarted: true,
         },
         {
            id: 'spacing',
            label: 'Spacing',
            icon: '↔️',
            path: 'spacing',
            element: <Spacing />,
            isNotStarted: true,
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
            isNotStarted: true,
         },
         {
            id: 'closure',
            label: 'Closure',
            icon: '🔒',
            path: 'closure',
            element: <ComingSoon />,
            isNotStarted: true,
         },
         {
            id: 'hoisting',
            label: 'Hoisting',
            icon: '⬆️',
            path: 'hoisting',
            element: <ComingSoon />,
            isNotStarted: true,
         },
         {
            id: 'this',
            label: 'This Keyword',
            icon: '👉',
            path: 'this',
            element: <ComingSoon />,
            isNotStarted: true,
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
            element: <BasicAlgorithm />,
            // isWIP: true,
         },
         {
            id: 'math-series',
            label: 'Math Series',
            icon: '🔍',
            path: 'math-series',
            element: <MathSeries />,
            isWIP: true,
         },
         {
            id: 'sorting',
            label: 'Sorting',
            icon: '📊',
            path: 'sorting',
            element: <ComingSoon />,
            isNotStarted: true,
         },
         {
            id: 'recursion',
            label: 'Recursion',
            icon: '🔄',
            path: 'recursion',
            element: <ComingSoon />,
            isNotStarted: true,
         },
      ],
   },
};
