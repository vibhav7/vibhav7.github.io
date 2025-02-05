export function sumUpToNUsingFor(n) {
   let result = 0;
   let iterations = 0;
   for (let i = 1; i <= n; i++) {
      result += i;
      iterations++;
   }
   return { result, iterations };
}

export function sumUpToNUsingMath(n) {
   const result = (n * (n + 1)) / 2;
   // Mathematical formula only takes 1 iteration
   return { result, iterations: 1 };
}

export const stringSumUpToNUsingMath = `
function sumUpToNUsingMath(n) {
   const sum = (n * (n + 1)) / 2;
   // Mathematical formula only takes 1 iteration
   return { sum, iterations: 1 };
}
   `;

export const stringSumUpToNUsingFor = `
function sumUpToNUsingFor(n) {
   let sum = 0;
   let iterations = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
      iterations++;
   }
   return { sum, iterations };
}
`;
