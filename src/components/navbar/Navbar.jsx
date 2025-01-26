import { Link, useLocation } from 'react-router';

const Navbar = () => {
   const location = useLocation(); // Get the current location
   const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Playground', path: '/playground' },
      { name: 'References', path: '/references' },
      { name: 'Contact', path: '/contact' },
   ];

   return (
      <nav className={`fixed bg-gray-800 top-0 left-0 right-0 z-50 transition-all duration-200 shadow-lg`}>
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
               <div className='flex items-center'>
                  <Link to='/' className='flex items-center flex-shrink-0'>
                     <span className='text-xl font-bold text-white'>Vibhav</span>
                  </Link>
               </div>

               {/* Desktop menu */}
               <div className='hidden sm:flex sm:items-center sm:ml-6'>
                  <div className='flex space-x-6'>
                     {navItems.map((item) => (
                        <Link
                           key={item.name}
                           to={item.path}
                           className={`px-3 py-2 text-sm font-medium transition-colors rounded-md 
                              ${location.pathname === item.path ? 'text-white bg-gray-700' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
                           {item.name}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
