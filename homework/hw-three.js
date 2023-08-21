// Task №1
function createArray(start, end){
    const result = [];
    for (let i = start; i <= end; i++){
      result.push(i);
    }
    return result;
  };

// let arr = createArray(2, 9);
// console.log(arr);

// Task №2
function printSequence(a, b) {
  for (let num = a; num <= b; num++) {
    for (let i = a; i <= num; i++) {
      console.log(num);
    }
  }
}

// Task №3
function randArray(k) {
  const array = [];
  for (let i = 0; i < k; i++) {
      const randomNumber = Math.floor(Math.random() * 500) + 1;
      array.push(randomNumber);
  }
  return array;
}

const resultArray = randArray(7); 
console.log(resultArray); 

// Task №4
function compact(arr) {
  const uniqueArr = [];

  arr.forEach(item => {
      if (!uniqueArr.includes(item)) {
          uniqueArr.push(item);
      }
  });
  return uniqueArr;
}

const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ;

// Task №5
function separateType(arr) {
  const result = {
      numbers: [],
      strings: [],
      arrays: []
  };

  for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if (typeof item === 'number') {
          result.numbers.push(item);
      } else if (typeof item === 'string') {
          result.strings.push(item);
      } else if (Array.isArray(item)) {
          result.arrays.push(item);
      }
  }
  return result;
}

const initialArray = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const separated = separateType(initialArray);

console.log(separated.numbers);
console.log(separated.strings);
console.log(separated.arrays);

// Task №6
function calc(a, b, op) {
  let result;
  
  switch (op) {
      case 1:
          result = a - b;
          break;
      case 2:
          result = a * b;
          break;
      case 3:
          result = a / b;
          break;
      default:
          result = a + b;
  }
  
  return result;
}

const a = 10;
const b = 3;

console.log(calc(a, b, 1));
console.log(calc(a, b, 2));
console.log(calc(a, b, 3));
console.log(calc(a, b, 8));

// Task №7
function findUnique(arr) {
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 11];

console.log(findUnique(array1));
console.log(findUnique(array2));
