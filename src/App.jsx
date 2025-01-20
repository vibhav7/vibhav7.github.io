import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from '@/components/about/About';
import Playground from '@/components/playground/Playground';
import Home from '@/components/home/Home';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/playground' element={<Playground />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
