import './App.css';
import { HashRouter, Route, Routes } from 'react-router';
import Playground from '@/components/pages/playground/Playground';
import Home from '@/components/pages/home/Home';
import { cssRoutes, javascriptRoutes } from './utils/routes.jsx';
import Contact from '@/components/pages/contact/Contact';
import References from './components/pages/references/References';
import Experience from './components/pages/experience/Experience';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/references' element={<References />} />
            <Route path='/contact' element={<Contact />} />
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
