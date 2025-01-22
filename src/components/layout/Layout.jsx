import Navbar from '../navbar/Navbar';

export default function Layout({ children }) {
   return (
      <div className='w-full h-screen max-h-screen bg-gray-200'>
         <Navbar />
         <>{children}</>
      </div>
   );
}
