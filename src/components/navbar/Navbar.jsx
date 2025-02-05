import { Link, useLocation } from 'react-router';

const Navbar = () => {
   const location = useLocation(); // Get the current location
   const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Experience', path: '/experience' },
      { name: 'Playground', path: '/playground' },
      { name: 'References', path: '/references' },
      { name: 'Contact', path: '/contact' },
   ];

   return (
      <nav className='fixed top-0 left-0 right-0 z-50 flex items-center w-full h-20 transition-all duration-300 border-b shadow-sm backdrop-blur-md bg-gradient-to-r from-slate-50/90 to-gray-100/90 border-gray-200/20'>
         <div className='w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-full'>
               <div className='flex items-center'>
                  <Link to='/' className='flex items-center flex-shrink-0 transition-transform hover:scale-105'>
                     <span className='text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600'>
                        Vibhav
                     </span>
                  </Link>
               </div>

               {/* Desktop menu */}
               <div className='hidden sm:flex sm:items-center'>
                  <div className='flex items-center space-x-8'>
                     {navItems.map((item) => (
                        <Link
                           key={item.name}
                           to={item.path}
                           className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ease-in-out
                              ${
                                 item.path === '/' && location.pathname === '/'
                                    ? 'text-indigo-700 bg-indigo-50/50 shadow-sm'
                                    : item.path !== '/' && location.pathname.startsWith(item.path)
                                    ? 'text-indigo-700 bg-indigo-50/50 shadow-sm'
                                    : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50'
                              }
                              before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-indigo-500
                              before:transition-transform before:duration-300 before:ease-in-out
                              ${
                                 (item.path === '/' && location.pathname === '/') || (item.path !== '/' && location.pathname.startsWith(item.path))
                                    ? 'before:scale-x-100'
                                    : 'hover:before:origin-left hover:before:scale-x-100'
                              }
                           `}>
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
