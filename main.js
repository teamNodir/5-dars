//1
// function alternateSort(arr) {
//   let sorted = [...arr].sort((a, b) => a - b);
//   let result = [];
//   let left = 0;
//   let right = sorted.length - 1;
//   while (left <= right) {
//     if (right >= left) result.push(sorted[right--]);
//     if (left <= right) result.push(sorted[left++]);
//   }
//   return result;
// }
// console.log(alternateSort([2,3,52,32,3,2,9,0]));

//2
// function mostFrequent(arr) {
//   let counts = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
//   return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
// }
// console.log(mostFrequent([2,3,2,32,3,2,9,0,0]));

//3
// function modifyOdds(arr) {
//   return arr.map(num => num % 2 !== 0 ? num * 2 : num);
// }
// console.log(modifyOdds([12,3,11,32,33,2,9,0,5]));

//4
// function getPalindromes(arr) {
//   return arr.filter(word => {
//     let str = String(word);
//     return str === str.split('').reverse().join('');
//   });
// }
// console.log(getPalindromes(["aba","asd",'aka','nima']));

//5
// function twiceAppearingWords(text) {
//   let words = text.toLowerCase().match(/\w+/g) || [];
//   let counts = {};
//   words.forEach(w => counts[w] = (counts[w] || 0) + 1);
//   return Object.keys(counts).filter(w => counts[w] === 2);
// }
// console.log(twiceAppearingWords("afsdssdfs sdfsdfsdf sdfsd fsdf dd dd rr rr"));

//6
// function sortWordsByLengthDesc(text) {
//   let words = text.match(/\w+/g) || [];
//   return words.sort((a, b) => b.length - a.length);
// }
// console.log(sortWordsByLengthDesc("afsdssdfs sdfsdfsdf sdfsd fsdf dd dd rr rr"));

//7
// function firstLettersOnly(text) {
//   return (text.match(/\b\w/g) || []).join('');
// }
// console.log(firstLettersOnly("sda anjir lo olma maktab"));

//8
// function squareDigits(str) {
//   return str.replace(/\d/g, match => Math.pow(Number(match), 2));
// }

//9
// function vowelStartWords(text) {
//   let words = text.match(/\w+/g) || [];
//   return words.filter(w => /^[aeiouAEIOU]/.test(w));
// }

//10
// function incrementDigits(str) {
//   return str.replace(/\d/g, match => Number(match) + 1);
// }

//11
// function reverseWordsInPlace(text) {
//   return text.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// }

//12
// function equalLengthPairs(text) {
//   let words = text.match(/\w+/g) || [];
//   let lengthCounts = {};
  
//   words.forEach(w => lengthCounts[w.length] = (lengthCounts[w.length] || 0) + 1);
  
//   let pairs = 0;
//   for (let count of Object.values(lengthCounts)) {
//     pairs += Math.floor(count / 2); 
//   }
//   return pairs;
// }

//13
// function difference(arr1, arr2) {
//   return arr1.filter(item => !arr2.includes(item));
// }

//14
// function groupByFirstLetter(arr) {
//   return arr.reduce((acc, word) => {
//     let firstLetter = word[0].toUpperCase();
//     if (!acc[firstLetter]) acc[firstLetter] = [];
//     acc[firstLetter].push(word);
//     return acc;
//   }, {});
// }

//15
// function formatWithCounts(arr) {
//   let counts = {};
//   arr.forEach(x => counts[x] = (counts[x] || 0) + 1);
//   return arr.map(x => `${x}(${counts[x]})`);
// }


//16
// function nextGreatestElements(arr) {
//   return arr.map((val, i) => {
//     let max = -1;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > max) max = arr[j];
//     }
//     return max; 
//   });
// }



//1
// function processArray(arr) {
//   return arr
//     .map(Math.abs)               
//     .filter(n => n % 2 === 0)    
//     .map(n => n ** 2)            
//     .reduce((sum, n) => sum + n, 0); 
// }

//2
// function checkTwoArr(arr1, arr2) {
//   return !arr1.some(item => arr2.includes(item));
// }
// console.log(checkTwoArr([1, 2, 3, 4], [0, 6]))

//3
// function sortArray(arr1, arr2, str) {
//   let merged = [...arr1, ...arr2];
//   return {
//     asc: [...merged].sort((a, b) => a - b),
//     desc: [...merged].sort((a, b) => b - a),
//     strArr: Array(merged.length).fill(str)
//   };
// }
// 4
// function numberSplit(n) {
//   return [Math.floor(n / 2), Math.ceil(n / 2)];
// }
// 5
// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }
// 6
// function sortAndDoubleEvens(arr) {
//   return arr
//     .filter(n => n % 2 === 0)
//     .sort((a, b) => a - b)
//     .map(n => n * 2);
// }
// 7
// function reverseImage(arr) {
//   return arr.map(row => [...row].reverse()).reverse();
// }
// 8
// function changeNumberToString(start, end) {
//   const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     arr.push(words[i]);
//   }
//   return arr.sort(); 
// }
// 9
// function addToArray(n) {
//   let arr = Array.from({ length: n }, (_, i) => i + 1);
//   let result = [];
//   for (let i = 0; i < arr.length; i += 3) {
//     result.push(arr.slice(i, i + 3));
//   }
//   return result;
// }
// 10
// function wordWithMostVowels(text) {
//   const words = text.split(' ');
//   let maxWord = '';
//   let maxCount = 0;
//   words.forEach(word => {
//     let count = (word.match(/[aeiouAEIOU]/g) || []).length;
//     if (count > maxCount) {
//       maxCount = count;
//       maxWord = word;
//     }
//   });
//   return maxWord;
// }