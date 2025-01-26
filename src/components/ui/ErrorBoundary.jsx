import { useNavigate, useRouteError } from 'react-router';

export default function ErrorBoundary() {
   //  const error = useRouteError();
   const navigate = useNavigate();

   return (
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
         <div className='w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg'>
            <h1 className='mb-4 text-4xl font-bold text-red-600'>This page does not exist</h1>
            <p className='mb-6 text-gray-600'>{'Something went wrong'}</p>
            <button
               onClick={() => navigate('/')}
               className='px-6 py-3 font-medium text-white transition-colors duration-200 bg-indigo-600 rounded-lg hover:bg-indigo-700'>
               Go to Homepage
            </button>
         </div>
      </div>
   );
}
