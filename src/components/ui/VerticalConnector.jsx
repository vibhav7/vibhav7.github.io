export default function VerticalConnector({ height = 100, className = '' }) {
   return (
      <div className={`relative w-[2px] ${className}`} style={{ height: `${height}px` }}>
         <svg className='absolute w-4 h-full -translate-x-1/2 left-1/2' viewBox='0 0 10 100' preserveAspectRatio='none'>
            {/* Vertical animated path */}
            <path d='M5,0 L5,100' fill='none' stroke='#3b82f6' strokeWidth='2' strokeDasharray='4,4' className='animate-dash' />
            {/* Start point circle */}
            <circle cx='5' cy='0' r='2' fill='#3b82f6' />
            {/* End point circle */}
            <circle cx='5' cy='100' r='2' fill='#3b82f6' />
         </svg>
      </div>
   );
}
