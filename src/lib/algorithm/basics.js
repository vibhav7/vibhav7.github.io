export function sumUpToNUsingFor(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}

export function sumUpToNUsingMath(n) {
   const result = (n * (n + 1)) / 2;
   return result;
}

export const stringSumUpToNUsingMath = `
function sumUpToNUsingMath(n) {
   const result = (n * (n + 1)) / 2;
   return result;
}
   `;

export const stringSumUpToNUsingFor = `
function sumUpToNUsingFor(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}
`;
