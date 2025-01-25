export default function ComingSoon({ title = 'Coming Soon' }) {
   return (
      <div className='flex flex-col items-center justify-center min-h-screen '>
         <div className='relative'>
            <div className='absolute inset-0 transform scale-150 -skew-y-12 blur-xl bg-white/20' aria-hidden='true'></div>
            <div className='relative px-12 py-8 text-center'>
               <h1 className='text-5xl font-extrabold tracking-tight text-gray-700 underline sm:text-6xl'>{title}</h1>
            </div>
         </div>
      </div>
   );
}
