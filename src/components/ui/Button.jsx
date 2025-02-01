import { cn } from '@/lib/utils';

export default function Button({ children, className, ...delegated }) {
   return (
      <button className={cn('bg-blue-500 text-white p-2 rounded-md', className)} {...delegated}>
         {children}
      </button>
   );
}
