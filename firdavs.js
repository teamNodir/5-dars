// // 1. 
// function zigZagSort(arr) {
//   arr.sort((a, b) => a - b);
//   let result = [];
//   let left = 0, right = arr.length - 1;
//   while (left <= right) {
//     if (left === right) result.push(arr[left]);
//     else result.push(arr[left], arr[right]);
//     left++;
//     right--;
//   }
//   return result;
// }
// console.log(zigZagSort([1, 4, 3, 2, 5]));

// // 2. 
// function mostFrequent(arr) {
//   let counts = {};
//   let maxCount = 0, element = arr[0];
//   for (let x of arr) {
//     counts[x] = (counts[x] || 0) + 1;
//     if (counts[x] > maxCount) {
//       maxCount = counts[x];
//       element = x;
//     }
//   }
//   return element;
// }
// console.log(mostFrequent([1, 3, 2, 1, 4, 1, 2]));

// // 3. 
// function multiplyOdds(arr) {
//   return arr.map(n => n % 2 !== 0 ? n * 2 : n);
// }
// console.log(multiplyOdds([1, 2, 3, 4, 5]));

// // 4. 
// function filterPalindromes(arr) {
//   return arr.filter(s => s === s.split('').reverse().join(''));
// }
// console.log(filterPalindromes(["kiyik", "olma", "non", "mashina"]));
// // 5. 
// function doubleWords(str) {
//   let words = str.split(' ');
//   let counts = {};
//   words.forEach(w => counts[w] = (counts[w] || 0) + 1);
//   return words.filter(w => counts[w] === 2);
// }
// console.log(doubleWords("olma anor olma behi anor anor"));

// // 6. 
// function sortByLength(str) {
//   return str.split(' ').sort((a, b) => b.length - a.length).join(' ');
// }
// console.log(sortByLength("men dasturlashni o'rganyapman"));

// // 7.
// function firstLetters(str) {
//   return str.split(' ').map(w => w[0]).join('');
// }
// console.log("7:", firstLetters(" some people are really amazing"));

// // 8.
// function squareDigits(str) {
//   return str.replace(/\d/g, n => n * n);
// }
// console.log(squareDigits("a2b3c4"));

// // 9.
// function vowelWords(str) {
//   const vowels = "aeiouo'AEIOUO'";
//   return str.split(' ').filter(w => vowels.includes(w[0]));
// }
// console.log(vowelWords("olma nok anor behi uzum"));
// // 10. 
// function incrementDigits(str) {
//   return str.replace(/\d/g, n => Number(n) + 1);
// }
// console.log(incrementDigits("a1b2"));

// // 11. 
// function reverseEachWord(str) {
//   return str.split(' ').map(w => w.split('').reverse().join('')).join(' ');
// }
// console.log(reverseEachWord("salom dunyo"));

// // 12. 
// function countEqualLengthPairs(str) {
//   let words = str.split(' '), count = 0;
//   for (let i = 0; i < words.length; i++) {
//     for (let j = i + 1; j < words.length; j++) {
//       if (words[i].length === words[j].length) count++;
//     }
//   }
//   return count;
// }
// console.log(countEqualLengthPairs("ana mana sana"));
// // 13.
// function difference(arr1, arr2) {
//   return arr1.filter(x => !arr2.includes(x));
// }
// console.log(difference([1, 2, 3], [2, 4]));

// // 14.
// function groupByFirstLetter(arr) {
//   return arr.reduce((acc, word) => {
//     let char = word[0].toUpperCase();
//     if (!acc[char]) acc[char] = [];
//     acc[char].push(word);
//     return acc;
//   }, {});
// }
// console.log(groupByFirstLetter(["Apple", "Banana", "Apricot", "Blueberry"]));

// // 15.
// function markOccurrences(arr) {
//   let counts = {};
//   return arr.map(x => {
//     counts[x] = (counts[x] || 0) + 1;
//     return `${x}(${counts[x]})`;
//   });
// }
// console.log(markOccurrences(['a', 'b', 'a']));

// // 16. 
// function nextGreater(arr) {
//   return arr.map((x, i) => {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > x) return arr[j];
//     }
//     return -1;
//   });
// }
// console.log(nextGreater([1, 5, 3, 6, 2]));
// // 1. 
// console.log((function (arr) {
//   return arr
//     .filter(n => n > 0)
//     .map(n => n % 2 === 0 ? n * n : n)
//     .reduce((sum, n) => sum + n, 0);
// })([-2, 1, 2, 3, 4]));

// // 2. 
// function checkTwoArr(arr1, arr2) {
//   return arr1.every(item => !arr2.includes(item));
// }
// console.log(checkTwoArr([1, 2, 3, 4], [0, 6]));
// console.log(checkTwoArr([1, 2, 3, 4], [2, 3]));

// // 3.
// function sortArray(arr1, arr2, str) {
//   let merged = [...arr1, ...arr2].sort((a, b) => a - b);
//   let reversed = [...merged].reverse();
//   let repeatedStr = Array(merged.length).fill(str);

//   console.log(merged);
//   console.log(reversed);
//   console.log(repeatedStr);
// }
// sortArray([1, 10], [2, 3, 4], 'nodejs');

// // 4.
// function numberSplit(n) {
//   return [Math.floor(n / 2), Math.ceil(n / 2)];
// }
// console.log(numberSplit(11));
// console.log(numberSplit(4));
// console.log(numberSplit(-9));

// // 5. 
// function sortByLength(arr) {
//   return arr.sort((a, b) => a.length - b.length);
// }
// console.log(sortByLength(["apple", "pie", "shortcake"]));
// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
// // 6. 
// console.log((function(arr) {
//     return arr
//         .filter(n => n % 2 === 0)
//         .sort((a, b) => a - b)
//         .map(n => n * 2);
// })([10, 5, 2, 8, 1, 4]));
// // 7.
// function reverseImage(matrix) {
//     return matrix.reverse().map(row => row.reverse());
// }
// console.log(reverseImage([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));
// // 8. 
// function changeNumberToString(start, end) {
//     const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//     let res = [];
//     for (let i = start; i <= end; i++) {
//         res.push(numbers[i]);
//     }
//     console.log(res);
//     console.log([...res].sort(() => Math.random() - 0.5));
// }
// changeNumberToString(1, 5);

// // 9.
// function addToArray(n) {
//     let fullArr = Array.from({ length: n }, (_, i) => i + 1);
//     console.log( fullArr);
    
//     let chunked = [];
//     for (let i = 0; i < fullArr.length; i += 3) {
//         chunked.push(fullArr.slice(i, i + 3));
//     }
//     return chunked;
// }
// console.log(addToArray(10));

// // 10.
// function mostVowels(str) {
//     const vowels = "aeiouo'AEIOUO'";
//     let words = str.split(' ');
//     let maxVowels = 0;
//     let resultWord = "";

//     words.forEach(word => {
//         let count = word.split('').filter(char => vowels.includes(char)).length;
//         if (count > maxVowels) {
//             maxVowels = count;
//             resultWord = word;
//         }
//     });
//     return resultWord;
// }
// console.log(mostVowels("dasturlash juda qiziqarli va ajoyib soha"));