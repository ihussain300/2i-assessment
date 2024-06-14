// Adding each digit from a string in an array to find the largest
function largestNumberTotal(strings) {
  // variable to store max total
  let maxTotal = 0;

  // for loop to iterate over each string in the array
  for (let string of strings) {
    // variable to store the current total
    let currentTotal = 0;

    // for loop to iterate over each character of each string & checks if the character is a digit& 'test' returns true if the character is a digit.
    // If the character is a digit then that character is converted to an integer & added to the current total. The '10' specifies that the base number is 10.
    for (let item of string) {
      if(/\d/.test(item)) {
        currentTotal += parseInt(item, 10);
      }
    }
    //if the current total is more than the max total then max total is updated with the current total
    if (currentTotal > maxTotal) {
      maxTotal = currentTotal;
    }
  }
  //retuns max total
  return maxTotal;
}

// example of how the above function can be used
const arrayOfStrings = ["dh7js4jf", "or2rjvn2w", "h1n36mfl", "a7e6fw", "55grgrg7", "fgf8hg4"];
console.log(largestNumberTotal(arrayOfStrings));