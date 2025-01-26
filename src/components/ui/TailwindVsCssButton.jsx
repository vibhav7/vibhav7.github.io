export default function TailwindVsCssButton({ isTailwind, setIsTailwind }) {
   const buttonClasses = isTailwind
      ? 'bg-[#0f172a] text-white border-[#0f172a] hover:bg-[#1e293b] hover:border-[#1e293b] shadow-md hover:shadow-lg'
      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-500 hover:text-blue-600 shadow-sm hover:shadow-md';

   const logo = isTailwind ? (
      <img src='/company-logos/tailwindcss-logotype-white.svg' alt='Tailwind CSS Logo' className='w-40' />
   ) : (
      <>
         <img src='/company-logos/css-3.svg' alt='CSS Logo' className='w-4' />
         <span>CSS</span>
      </>
   );

   return (
      <button
         onClick={() => setIsTailwind((prev) => !prev)}
         className={`px-4 w-[194px] h-10 py-2 font-medium transition-all duration-300 border rounded-lg ${buttonClasses}`}>
         <div className='flex items-center justify-center gap-2 transition-transform transform hover:scale-105'>{logo}</div>
      </button>
   );
}
