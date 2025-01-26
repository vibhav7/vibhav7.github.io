import { useIsMobile } from '@/hooks/use-mobile';
import Navbar from '../navbar/Navbar';
import ComingSoon from '../ui/ComingSoon';

export default function Layout({ children }) {
   const isMobile = useIsMobile();
   return (
      <div className='w-full h-screen max-h-screen overflow-auto bg-gray-200'>
         <Navbar />
         {isMobile ? <ComingSoon title='Coming Soon' /> : <>{children}</>}
      </div>
   );
}
