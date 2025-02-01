import { cn } from '@/lib/utils';
export default function Input(props) {
   const { className, ...rest } = props;
   return (
      <div>
         <input placeholder='type a number' className={cn('w-full p-2 border rounded-md ', className)} {...rest} />
      </div>
   );
}
