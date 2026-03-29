// 1-masala
// function mySort(arr){
// let sorted = [...arr].sort((a, b) => a - b)

// let result = []
// let left = 0
// let right = sorted.length - 1

// while (left <= right){
//   if (left === right){
//     result.push(sorted[left])
//   }else {
//     result.push(sorted[left])
//     result.push(sorted[right])
//   }
//   left++
//   right--
// }
// return result
// }
// console.log(mySort([5, 2, 9, 1, 5, 6]));

// 2-masala
// function myFunc(arr) {
//   const count = {};
//   let maxCount = 0;
//   let mostFrequent;

//   for (let item of arr) {
//     count[item] = (count[item] || 0) + 1;

//     if (count[item] > maxCount) {
//       maxCount = count[item];
//       mostFrequent = item;
//     }
//   }

//   return mostFrequent;
// }

// console.log(myFunc([1, 3, 2, 3, 4, 3, 2, 1, 3]));

// 3-masala
// function myFunc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num % 2 !== 0) {
//       result[result.length] = num * 2;
//     } else {
//       result[result.length] = num;
//     }
//   }

//   return result;
// }

// console.log(myFunc([1, 2, 3, 4, 5, 6]));

// 4-masala
// function funcPalindrom(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let word = arr[i];
//     let reversed = "";

//     for (let j = word.length - 1; j >= 0; j--) {
//       reversed += word[j];
//     }

//     if (word === reversed) {
//       result[result.length] = word;
//     }
//   }

//   return result;
// }

// console.log(funcPalindrom(["level", "hello", "anna", "world", "madam"]));

// 5-masala
// function twoWords(text) {
//   let words = text.split(" ");
//   let result = [];

//   for (let i = 0; i < words.length; i++) {
//     let count = 0;

//     for (let j = 0; j < words.length; j++) {
//       if (words[i] === words[j]) count++;
//     }

//     if (count === 2) {
//       let exists = false;
//       for (let k = 0; k < result.length; k++) {
//         if (result[k] === words[i]) exists = true;
//       }

//       if (!exists) result[result.length] = words[i];
//     }
//   }

//   return result;
// }

// console.log(twoWords("apple banana apple orange banana"));

// 6-masala
// function myFunc(text) {
//   let words = text.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i].length < words[j].length) {
//         let temp = words[i];
//         words[i] = words[j];
//         words[j] = temp;
//       }
//     }
//   }

//   return words;
// }

// console.log(myFunc("hi hello world"));

// 7-masala
// function myFunc(text) {
//   let words = text.split(" ");
//   let result = "";

//   for (let i = 0; i < words.length; i++) {
//     result += words[i][0];
//   }

//   return result;
// }

// console.log(myFunc("hello world javascript"));

// 8-masala
// function myFunc(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch >= "0" && ch <= "9") {
//       let num = ch - "0";
//       result += num * num;
//     } else {
//       result += ch;
//     }
//   }

//   return result;
// }

// console.log(myFunc("a2b3"));

// 9-masala
// function myWords(text) {
//   let words = text.split(" ");
//   let result = [];
//   let vowels = "aeiouAEIOU";

//   for (let i = 0; i < words.length; i++) {
//     let first = words[i][0];
//     let isVowel = false;

//     for (let j = 0; j < vowels.length; j++) {
//       if (first === vowels[j]) isVowel = true;
//     }

//     if (isVowel) {
//       result[result.length] = words[i];
//     }
//   }

//   return result;
// }

// console.log(myWords("apple banana orange egg"));

// 10-masala
// function myFunc(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];

//     if (ch >= "0" && ch <= "9") {
//       let num = ch - "0";
//       result += num + 1;
//     } else {
//       result += ch;
//     }
//   }

//   return result;
// }

// console.log(myFunc("a1b2c3"));

// 11-masala
// function reverseWords(text) {
//   let words = text.split(" ");
//   let result = [];

//   for (let i = words.length - 1; i >= 0; i--) {
//     result[result.length] = words[i];
//   }

//   return result.join(" ");
// }

// console.log(reverseWords("hello world js"));

// 12-masala
// function myFunc(text) {
//   let words = text.split(" ");
//   let count = 0;

//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i].length === words[j].length) {
//         count++;
//       }
//     }
//   }

//   return count;
// }

// console.log(myFunc("hi world no java"));

// 13-masala
// function difference(arr1, arr2) {
//   let result = [];

//   for (let i = 0; i < arr1.length; i++) {
//     let found = false;

//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) found = true;
//     }

//     if (!found) result[result.length] = arr1[i];
//   }

//   return result;
// }

// console.log(difference([1, 2, 3], [2, 4]));

// 14-masala
// function myFunc(arr) {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     let first = arr[i][0];

//     if (!result[first]) result[first] = [];

//     result[first][result[first].length] = arr[i];
//   }

//   return result;
// }

// console.log(myFunc(["apple", "ant", "banana"]));

// 15-masala
// function myFunc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) count++;
//     }

//     result[result.length] = arr[i] + "(" + count + ")";
//   }

//   return result;
// }

// console.log(myFunc(["a", "b", "a"]));

// 16-masala
// function myfunc(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let found = -1;

//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         found = arr[j];
//         break;
//       }
//     }

//     result[result.length] = found;
//   }

//   return result;
// }

// console.log(myfunc([4, 5, 2, 10]));

// 17-masala
// let arr = [-1, 2, -3, 5, -6, 7, -8];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = arr[i] * arr[i];
//     }
//     sum += arr[i];
//   } else {
//     arr[i] = 0;
//   }
// }

// console.log(arr);
// console.log(sum);

// 18-masala
// function checkTwoArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(checkTwoArr([9, 9, 8], [8, 9]));

// 19-masala
// function sortArray(arr1, arr2, str) {

//   let numbers = [];
//   for (let i = 0; i < arr1.length; i++) numbers.push(arr1[i]);
//   for (let i = 0; i < arr2.length; i++) numbers.push(arr2[i]);

//   let sortedAsc = [];
//   for (let i = 0; i < numbers.length; i++) {
//     sortedAsc.push(numbers[i]);
//   }
//   for (let i = 0; i < sortedAsc.length - 1; i++) {
//     for (let j = i + 1; j < sortedAsc.length; j++) {
//       if (sortedAsc[i] > sortedAsc[j]) {
//         let temp = sortedAsc[i];
//         sortedAsc[i] = sortedAsc[j];
//         sortedAsc[j] = temp;
//       }
//     }
//   }

//   let sortedDesc = [];
//   for (let i = sortedAsc.length - 1; i >= 0; i--) {
//     sortedDesc.push(sortedAsc[i]);
//   }

//   let repeatedStr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     repeatedStr.push(str);
//   }

//   return [sortedAsc, sortedDesc, repeatedStr];
// }

// let result = sortArray([1, 10], [2, 3, 4], "nodejs");
// console.log(result[0]); // [1, 2, 3, 4, 10]
// console.log(result[1]); // [10, 4, 3, 2, 1]
// console.log(result[2]); // ['nodejs', 'nodejs', 'nodejs', 'nodejs', 'nodejs']

// 20-masala
// function numberSplit(n) {
//   let first, second;

//   if (n % 2 === 0) {
//     first = n / 2;
//     second = n / 2;
//   } else {
//     first = (n - 1) / 2;
//     second = first + 1;
//   }

//   return [first, second];
// }

// console.log(numberSplit(-9));

// 21-masala
// function sortByLength(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].length > arr[j + 1].length) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));

// 22-masala
// let arr = [5, 2, 8, 7, 4, 3, 6];
// let evenNumbers = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenNumbers.push(arr[i]);
//   }
// }

// for (let i = 0; i < evenNumbers.length - 1; i++) {
//   for (let j = i + 1; j < evenNumbers.length; j++) {
//     if (evenNumbers[i] > evenNumbers[j]) {
//       let temp = evenNumbers[i];
//       evenNumbers[i] = evenNumbers[j];
//       evenNumbers[j] = temp;
//     }
//   }
// }

// let evenIndex = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     arr[i] = evenNumbers[evenIndex] * 2;
//     evenIndex++;
//   }
// }

// console.log(arr);

// 23-masala
// function reverseImage(arr) {
//   let result = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     let row = [];
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       row[row.length] = arr[i][j];
//     }
//     result[result.length] = row;
//   }
//   return result;
// }

// console.log(reverseImage([[1, 2, 3],[4, 5, 6],[7, 8, 9],]),);

// 24-masala
// function changeNumberToString(start, end) {
//   let words = ["zero","one","two","three","four","five","six","seven","eight","nine","ten",];
//   let res = [];
//   for (let i = start; i <= end; i++) {
//     res[res.length] = words[i];
//   }
//   return res;
// }

// console.log(changeNumberToString(1, 5));

// 25-masala
// function addToArray(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result[result.length] = i;
//   }

//   let ch = [];
//   for (let i = 0; i < result.length; i += 3) {
//     let group = [];
//     for (let j = 0; j < 3 && i + j < result.length; j++) {
//       group[group.length] = result[i + j];
//     }
//     ch[ch.length] = group;
//   }
//   return ch;
// }

// console.log(addToArray(10));

// 26-masala
// function engKopUnliSoz(text) {
//   const unli = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const words = text.split(" ");

//   let maxUnliCount = 0;
//   let resultWord = "";

//   for (const word of words) {
//     let count = 0;
//     for (const letter of word) {
//       if (unli.includes(letter)) {
//         count++;
//       }
//     }
//     if (count > maxUnliCount) {
//       maxUnliCount = count;
//       resultWord = word;
//     }
//   }

//   return resultWord;
// }

// const text = "Salom dunyo, bu yerda backend node js guruhida o'qiymiz";
// console.log(engKopUnliSoz(text));
