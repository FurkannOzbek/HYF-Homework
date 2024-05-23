// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// // fib(5) // output = 3
// // fib(10) // output = 34

// // 1st Solution but this can cause stack overflow on big numbers
// const fibData = [0, 1];
// function fib(number) {
//   for (i = 2; i < number; i++) {
//     let fib = fibData[i - 1] + fibData[i - 2];
//     fibData.push(fib);
//   }
//   return fibData[number - 1];
// }

// console.log(fib(10));

// // Second Solution but also stack overflow

// function fibRec(n) {
//   if (n === 1) {
//     return 0;
//   }
//   if (n === 2) {
//     return 1;
//   } else {
//     return fibRec(n - 1) + fibRec(n - 2);
//   }
// }
// console.log(fibRec(10));

// Third solution for prevent stack overflow

function fibCorrect(n) {
  const fiboNumbers = [0, 1];
  let newNumber;

  // Logic for not holding all the data until we are coming to wanted number
  for (let i = 2; i < n; i++) {
    newNumber = fiboNumbers[0] + fiboNumbers[1];
    fiboNumbers[0] = fiboNumbers[1];
    fiboNumbers[1] = newNumber;
  }
  return newNumber;
}

console.log(fibCorrect(10));
