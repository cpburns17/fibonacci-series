function fibonacci(num) {
  // let fib = [0,1];
  // if(num == 0) {
  //   return 0
  // } else {
  //   for(let i=1; i < num ; i++) {
  //     let num1 = fib[fib.length -2]
  //     let num2 = fib[fib.length -1]
  //     let sum = num1 + num2
  //     fib.push(sum)
  //   } 
  //   return fib[fib.length -1]
  // }

  if(num <=1) {
    return num
  }
  
  let lastTwo = [0,1]

  for(let i=0; i<num-1; i++) {
    const sum = lastTwo[0] + lastTwo[1]
    lastTwo = [lastTwo[1], sum]
  }
  return lastTwo[1]
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: 0");
  // console.log("=>", fibonacci(0));

  // console.log("");

  // console.log("Expecting: 1");
  // console.log("=>", fibonacci(2));

  // console.log("");

  // console.log("Expecting: 55");
  // console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// first, we know that num contains a single element being a number. we want to count up until that number and while were counting, were also adding the previous sum to the current number therefore we will create a for loop and a sum variable to track the sum of each prev action. 