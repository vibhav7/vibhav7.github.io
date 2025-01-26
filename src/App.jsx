import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import About from '@/components/pages/about/About';
import Playground from '@/components/pages/playground/Playground';
import Home from '@/components/pages/home/Home';
import { cssRoutes, javascriptRoutes } from './utils/routes.jsx';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/references' element={<References />} /> */}
            {/* <Route path='/contact' element={<Contact />} /> */}
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
