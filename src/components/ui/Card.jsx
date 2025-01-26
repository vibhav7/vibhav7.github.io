export default function Card({ children, ...rest }) {
   return (
      <div className='p-4 bg-white rounded-lg shadow-md' {...rest}>
         {children}
      </div>
   );
}
