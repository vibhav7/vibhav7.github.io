export default function HighlightedCode({ highlightedCode }) {
   if (highlightedCode)
      return (
         <div
            className='p-4 rounded-lg [&_pre]:!bg-gray-800 [&_pre]:p-4 [&_code]:block [&_code]:!font-mono [&_code]:text-sm'
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
         />
      );
   return null;
}
