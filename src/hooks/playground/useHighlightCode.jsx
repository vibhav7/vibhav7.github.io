import { useState } from 'react';
import { codeToHtml } from 'shiki';
import DOMPurify from 'dompurify';
export default function useHighlightCode() {
   const [highlightedCode, setHighlightedCode] = useState('');

   async function highlight(fn = ``) {
      // console.log(fn);
      const code = fn;

      const highlighted = await codeToHtml(code, {
         lang: 'javascript',
         theme: 'github-dark',
      });
      const sanitizedHtml = DOMPurify.sanitize(highlighted);
      setHighlightedCode(sanitizedHtml);
   }
   return { highlightedCode, highlight };
}
