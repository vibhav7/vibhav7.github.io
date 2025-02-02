import { cn } from '@/lib/utils';

export default function Card({ className, children, ...rest }) {
   return (
      <div className={cn('p-4 bg-white rounded-lg shadow-md', className)} {...rest}>
         {children}
      </div>
   );
}
