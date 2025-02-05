// O(n) approach - Divide by 2 until we get 1
export function isPowerOfTwoLogarithmic(n) {
   if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
   let iterations = 0;
   let num = n;
   while (num > 1) {
      iterations++;
      if (num % 2 !== 0) return { result: "No, it's not a power of 2", iterations };
      num = num / 2;
   }
   return { result: "Yes, it's a power of 2", iterations };
}

// O(log n) approach - Using bitwise operations
export function isPowerOfTwo(n) {
   if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
   // Only one bitwise operation is needed
   const iterations = 1;
   return {
      result: (n & (n - 1)) === 0 ? "Yes, it's a power of 2" : "No, it's not a power of 2",
      iterations,
   };
}

// O(sqrt(n)) approach - Check divisibility by powers of 2 up to sqrt(n)
export function isPowerOfTwoSqrt(n) {
   if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
   const sqrtN = Math.floor(Math.sqrt(n));
   let power = 1;
   let iterations = 0;

   for (let i = 0; i <= sqrtN; i++) {
      iterations++;
      if (power === n) return { result: "Yes, it's a power of 2", iterations };
      power *= 2;
   }
   return { result: "No, it's not a power of 2", iterations };
}

// Code strings for display
export const stringIsPowerOfTwoLogarithmic = `
function isPowerOfTwoLogarithmic(n) {
    if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
    let iterations = 0;
    let num = n;
    while (num > 1) {
        iterations++;
        if (num % 2 !== 0) return { result: "No, it's not a power of 2", iterations };
        num = num / 2;
    }
    return { result: "Yes, it's a power of 2", iterations };
}`;

export const stringIsPowerOfTwo = `
function isPowerOfTwo(n) {
    if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
    // Only one bitwise operation is needed
    const iterations = 1;
    return { 
        result: (n & (n - 1)) === 0 ? "Yes, it's a power of 2" : "No, it's not a power of 2", 
        iterations 
    };
}`;

export const stringIsPowerOfTwoSqrt = `
function isPowerOfTwoSqrt(n) {
    if (n <= 0) return { result: "No, it's not a power of 2", iterations: 0 };
    const sqrtN = Math.floor(Math.sqrt(n));
    let power = 1;
    let iterations = 0;
    
    for (let i = 0; i <= sqrtN; i++) {
        iterations++;
        if (power === n) return { result: "Yes, it's a power of 2", iterations };
        power *= 2;
    }
    return { result: "No, it's not a power of 2", iterations };
}`;
