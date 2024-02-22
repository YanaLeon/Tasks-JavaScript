// I love Fibonacci numbers in general, but I must admit I love some more than others. I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.
// nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence. For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
   let arrayFibo = [];
   let prev = 0;
   let cur = 1;
   let prevStor;

   for (let i = 0; i < n; i++) {
    arrayFibo.push(prev);
    prevStor = prev;
    prev = cur;
    cur = prevStor + cur;
   }

   return arrayFibo[n - 1];
}

console.log(nthFibo(4))
