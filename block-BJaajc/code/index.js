function getFullName(firstName, lastName) {
  return firstName + lastName;
}
/*
function isPalindrome(str) {
  // get the total length of the words
  const len = string.length;

  // Use for loop to divide the words into 2 half
  for (let i = 0; i < len / 2; i++) {
    // validate the first and last characters are same
    if (string[i] !== string[len - 1 - i]) {
      alert('false');
    }
  }
  alert('true');
}

// accept the string or number from the prompt
const string = prompt('Enter a string or number: ');

const value = validatePalin(string);

console.log(value);
*/

module.exports = getFullName;
