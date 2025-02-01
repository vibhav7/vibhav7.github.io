export function sumUpToNUsingFor(n) {
   let sum = 0;
   for (let i = 1; i <= n; i++) {
      sum += i;
   }
   return sum;
}

export function sumUpToNUsingMath(n) {
   console.log(typeof n, n);
   const result = (n * (n + 1)) / 2;
   return result;
}
