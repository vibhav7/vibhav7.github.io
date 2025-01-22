import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import About from '@/components/about/About';
import Playground from '@/components/playground/Playground';
import Home from '@/components/home/Home';
import Flex from '@/components/playground/flex/Flex';
import Grid from '@/components/playground/grid/Grid';
import Position from '@/components/playground/position/Position';
import Spacing from '@/components/playground/spacing/Spacing';
import ComingSoon from '@/components/ui/ComingSoon';

const cssRoutes = [
   { path: 'flex', element: <Flex /> },
   { path: 'grid', element: <Grid /> },
   { path: 'position', element: <Position /> },
   { path: 'spacing', element: <Spacing /> },
];

const javascriptRoutes = [
   { path: 'scope', element: <ComingSoon /> },
   { path: 'closure', element: <ComingSoon /> },
   { path: 'hoisting', element: <ComingSoon /> },
   { path: 'this', element: <ComingSoon /> },
];

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/playground' element={<Playground />}>
               <Route path='css'>
                  {cssRoutes.map((route) => (
                     <Route key={route.path} path={route.path} element={route.element} />
                  ))}
               </Route>
               <Route path='javascript'>
                  {javascriptRoutes.map((route) => (
                     <Route key={route.path} path={route.path} element={route.element} />
                  ))}
               </Route>
            </Route>
         </Routes>
      </HashRouter>
   );
}

export default App;
