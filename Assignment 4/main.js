// Sum of all even numbers
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumevennumber(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      sum = sum + a[i];
    }
  }
  return sum;
}
const output1 = sumevennumber(a);
console.log(output1);
// num of vowels
function numofvowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let str = string[i];
    if (str == "a" || str == "e" || str == "i" || str == "o" || str == "u")
      count++;
  }
  return count;
}
const output2 = numofvowels("hello world");
console.log(output2);
// Longest string
let a2 = ["apple", "banana", "pear", "grapefruit"];
function longeststring(a2) {
  let len = 0;
  for (i = 0; i < a2.length; i++) {
    if (a2[i].length > len) {
      len = a2[i].length;
    }
  }
  return len;
}
const output3 = longeststring(a2);
console.log(output3);
// Average
let a3 = [1, 2, 3, 4, 5];
function average(a3) {
  let avg;
  let total = 0;

  for (i = 0; i < a3.length; i++) {
    total = total + a3[i];
  }
  avg = total / a3.length;
  return avg;
}
const output4 = average(a3);
console.log(output4);
// array of all keys in object
let obj1 = {
  name: "usman",
  age: 23,
  city: "Karachi",
};
function keyelement(obj1) {
  return Object.keys(obj1);
}
const output5 = keyelement(obj1);
console.log(output5);
// array specified key
let a4 = [
  {
    name: "Ali",
    age: 30,
  },
  {
    name: "Ahmed",
    age: 35,
  },
  {
    name: "Hassan",
    age: 25,
  },
];
function specifiedkeys(a4) {
  let values = [];
  for (i = 0; i < a4.length; i++) {
    values.push(a4[i].name);
  }
  return values;
}
const output6 = specifiedkeys(a4);
console.log(output6);
// unique strings
let a5 = ["apple", "banana", "apple", "pear", "pear", "orange"];
function uniquestring(a5) {
  let values1 = [];
  let check = false;
  for (i = 0; i < a5.length; i++) {
    for (j = 0; j < values1.length; j++) {
      if (a5[i] == values1[j]) {
        check = true;
      }
    }
    if (check == false) {
      values1.push(a5[i]);
    }
    check = false;
  }
  return values1;
}
const output7 = uniquestring(a5);
console.log(output7);
// Product
let a6 = [1, 2, 3, 4, 5];
function product(a6) {
  let mul = 1;
  for (let i = 0; i < a6.length; i++) {
    mul = mul * a6[i];
  }
  return mul;
}
const output8 = product(a6);
console.log(output8);
