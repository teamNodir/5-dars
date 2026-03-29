// amaliyot  

// 1-masala 

// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }

// console.log(sortArray([5, 2, 9, 1, 5, 6]));


// 2-masala  

// function mostFrequent(arr) {
//   let count = {};
//   let max = 0;
//   let result;

//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] > max) {
//       max = count[num];
//       result = num;
//     }
//   }
//   return result;
// }

// console.log(mostFrequent([1, 3, 3, 2, 1, 3])); 

// 3-masala 

// function uniqueArray(arr) {
//   return [...new Set(arr)];
// }

// console.log(uniqueArray([1, 2, 2, 3, 4, 4]));



// 4-masala  


// function palindromes(arr) {
//   return arr.filter(word => word === word.split('').reverse().join(''));
// }

// console.log(palindromes(["anna", "olma", "non", "kitob"])); 

  
// 5-masala  


// function twiceWords(text) {
//   let words = text.split(" ");
//   let count = {};

//   words.forEach(w => count[w] = (count[w] || 0) + 1);

//   return words.filter(w => count[w] === 2);
// }

// console.log(twiceWords("olma banan olma uzum banan"));


// 6-masala  

// function sortByLength(str) {
//   return str.split(" ").sort((a, b) => b.length - a.length);
// }

// console.log(sortByLength("salom dunyo javascript")); 



// 7-masala  


// function firstLetters(str) {
//   return str.split(" ").map(w => w[0]).join("");
// }

// console.log(firstLetters("salom dunyo javascript"));
 


// 8-masala  

// function squareDigits(str) {
//   return str.replace(/\d/g, d => d * d);
// }

// console.log(squareDigits("a1b2c3"));
 

// 9-masala  

// function vowelWords(str) {
//   return str.split(" ").filter(w => /^[aeiou]/i.test(w));
// }

// console.log(vowelWords("olma banan uzum anor nok")); 


// 10-masala  


// function increaseDigits(str) {
//   return str.replace(/\d/g, d => +d + 1);
// }

// console.log(increaseDigits("a1b2c3"));  



//  11-masala 


// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("salom dunyo javascript"));  


// 12-masala   


// function countPairs(str) {
//   let words = str.split(" ");
//   let count = 0;

//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i].length === words[j].length) count++;
//     }
//   }
//   return count;
// }

// console.log(countPairs("olma nok uzum anor"));



// 13-masala  

// function diff(arr1, arr2) {
//   return arr1.filter(x => !arr2.includes(x));
// }

// console.log(diff([1, 2, 3, 4], [2, 4]));
 


// 14-masala  

// function groupByFirst(arr) {
//   let result = {};

//   arr.forEach(word => {
//     let key = word[0];
//     if (!result[key]) result[key] = [];
//     result[key].push(word);
//   });

//   return result;
// }

// console.log(groupByFirst(["olma", "anor", "banan", "behi"])); 



// 15-masala 

// function countElements(arr) {
//   let res = {};
//   arr.forEach(el => res[el] = (res[el] || 0) + 1);
//   return res;
// }

// console.log(countElements(["a", "b", "a", "c", "b", "a"]));


// 16-masala  


// function nextGreater(arr) {
//   return arr.map((num, i) => {
//     let next = arr.slice(i + 1).filter(x => x > num);
//     return next.length ? Math.min(...next) : -1;
//   });
// }

// console.log(nextGreater([2, 1, 5, 3])); 




// uyga vazifa  

// 1-masala  


// function processArray(arr) {
//   let positive = arr.map(x => Math.abs(x));
//   let evenSquares = positive
//     .filter(x => x % 2 === 0)
//     .map(x => x * x);

//   return evenSquares.reduce((a, b) => a + b, 0);
// }

// console.log(processArray([-2, 3, 4, -5, 6]));  


// 2-masala  

// function checkTwoArr(arr1, arr2) {
//   return !arr2.some(x => arr1.includes(x));
// }

// console.log(checkTwoArr([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArr([3, 1], [4, 0])); 
// console.log(checkTwoArr([9, 9, 8], [8, 9])); 
// console.log(checkTwoArr([1, 2, 3, 4], [2, 3]));  


// 3-masala  

// function sortArray(arr1, arr2, str) {
//   let merged = [...arr1, ...arr2];

//   return {
//     asc: [...merged].sort((a, b) => a - b),
//     desc: [...merged].sort((a, b) => b - a),
//     filled: merged.map(() => str)
//   };
// }

// let res = sortArray([1, 10], [2, 3, 4], "nodejs");
// console.log(res.asc);  
// console.log(res.desc); 
// console.log(res.filled);


// 4-masala 


// function numberSplit(n) {
//   let a = Math.floor(n / 2);
//   let b = Math.ceil(n / 2);
//   return [a, b];
// }

// console.log(numberSplit(4));  
// console.log(numberSplit(10));  
// console.log(numberSplit(11)); 
// console.log(numberSplit(-9));  


// 5-masala  


// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
// console.log(sortByLength(["apple", "pie", "shortcake"]));


// 6-masala  

// function evenProcess(arr) {
//   return arr
//     .filter(x => x % 2 === 0)
//     .sort((a, b) => a - b)
//     .map(x => x * 2);
// }

// console.log(evenProcess([5, 2, 8, 1, 4]));  


// 7-masala  

// function reverseImage(matrix) {
//   return matrix.map(row => row.reverse()).reverse();
// }

// console.log(reverseImage([
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ]));

// 8-masala  

// function changeNumberToString(start, end) {
//   const nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];

//   let res = [];
//   for (let i = start; i <= end; i++) {
//     res.push(nums[i]);
//   }

//   return {
//     normal: res,
//     reversed: [...res].reverse()
//   };
// }

// let r = changeNumberToString(1,5);
// console.log(r.normal);
// console.log(r.reversed);


// 9-masala  


// function addToArray(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) arr.push(i);

//   let res = [];
//   for (let i = 0; i < arr.length; i += 3) {
//     res.push(arr.slice(i, i + 3));
//   }

//   return res;
// }

// console.log(addToArray(10)); 


// 10-masala  


// function mostVowels(str) {
//   let words = str.split(" ");
//   let vowels = "aeiou";
//   let max = 0;
//   let result = "";

//   for (let word of words) {
//     let count = 0;
//     for (let ch of word.toLowerCase()) {
//       if (vowels.includes(ch)) count++;
//     }

//     if (count > max) {
//       max = count;
//       result = word;
//     }
//   }

//   return result;
// }

// console.log(mostVowels("salom dunyo javascript olmaaaa"));