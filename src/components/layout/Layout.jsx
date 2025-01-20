import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
   return (
      <div className='w-full h-screen'>
         <Navbar />
         <>{children}</>
      </div>
   );
}
