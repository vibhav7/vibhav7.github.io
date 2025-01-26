const CenteredElement = ({ translate }) => {
   return (
      <>
         {/* Horizontal dashed line */}
         <div className='absolute left-0 w-full border-t border-gray-300 border-dashed top-1/2'></div>
         {/* Vertical dashed line */}
         <div className='absolute top-0 h-full border-l border-gray-300 border-dashed left-1/2'></div>

         {/* Centered child element */}
         <div
            className='absolute w-20 h-20 bg-blue-500 rounded-lg top-1/2 left-1/2'
            style={{
               ...(translate && {
                  transform: `translate(${translate.x}%, ${translate.y}%)`,
               }),
            }}></div>
      </>
   );
};

export default CenteredElement;
