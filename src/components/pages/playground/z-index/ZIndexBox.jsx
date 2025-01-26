import Card from '@/components/ui/Card';
import { cn } from '@/lib/utils';
export default function ZIndexBox({ zIndexValues, cardType, additionalClass = '' }) {
   return (
      <Card
         className={cn(
            'absolute flex items-center justify-center w-32 h-32 text-white rounded-lg shadow-lg left-40 top-40',
            {
               'bg-green-500': cardType == 'green',
               'bg-red-500': cardType === 'red',
               'bg-blue-500': cardType === 'blue',
            },
            additionalClass,
         )}
         style={{ zIndex: zIndexValues[cardType] }}>
         {cardType} Box
         <br />
         z-index: {zIndexValues[cardType]}
      </Card>
   );
}
