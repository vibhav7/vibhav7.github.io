import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import About from '@/components/about/About';
import Playground from '@/components/playground/Playground';
import Home from '@/components/home/Home';
import { cssRoutes, javascriptRoutes } from './utils/routes.jsx';

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
