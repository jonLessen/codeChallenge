//Problem-1
const findSum = [2, 4, 6].reduce(add,0);
  function add(accumulator, a) {
  return accumulator + a;
};
 console.log(findSum);

//problem-2
//const findFrequency = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'];


//problem-3
function isPalindrome(str) {
  const arrayValues = string.split('');
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join('');
  if(string == reverseString) {
    console.log('True'); 
  } else {
    console.log('False')
  }
}
const string = 'rotator'
isPalindrome(string); 

//problem-4
const arr = [5, 1, 2, 3, 1, 4];
const largestPair = (arr = []) => {
  let first = 0;
  let second = 0;
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
      first = arr[i];
      second = arr[i + 1];
      if (first * second > res) {
        res = first * second;
      };
  };
  return res;
};
console.log(largestPair(arr)); 

//Problem-5
const startParenth = ('ido(not)liketocode').replace(/[()]/g, '');

let firstPart =startParenth.slice(0,3);
let secondPart = startParenth.slice(6,16);

const removeParenth = firstPart + secondPart;

console.log(removeParenth);

//Problem-6
let word = ("hello");

const scrabble = {
  a: 1, b: 3, c:3, d: 2, e: 1, f: 4, g: 2, h:4, i:1, j: 8,
  k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
};

const scoreScrabble = [...word].reduce((accu, letter) => { return accu + scrabble[letter.toLowerCase()]; }, 0);

alert(scoreScrabble);
