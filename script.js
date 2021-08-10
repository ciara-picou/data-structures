//TWO POINTERS
//TWO POINTERS: PALINDROME
//given a string determine if it is a palindrome
//the string will only contain lowercase letters
// function isPalindrome(string) {
//   let j = string.length - 1;
//   for (let i = 0; i < string.length / 2; i++) {
//     if (string[i] !== string[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }
// console.log(isPalindrome("kayak")); // = true
// console.log(isPalindrome("racecar")); // = true
// console.log(isPalindrome("car")); // = false

//TWO POINTER : LEETCODE'S PALINDROME
//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript
// function isPalindrome(x) {
//   x = x.toLowerCase();
//   //our two pointers
//   let left = 0;
//   let right = x.length - 1;

//   for (let i = Math.floor(x.length / 2); i < x.length; i++) {
//     if (x.charAt(left) !== x.charAt(right)) {
//       console.log(false);
//       return false;
//     }
//     left++;
//     right--;
//   }
//   console.log(true);
//   return true;
// }
// isPalindrome("kayak"); //true
// isPalindrome("tomato"); //false

//TWO POINTERS: REVERSE STRING
//https://leetcode.com/problems/reverse-string/
// var reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   let swap = "";
//   for (let i = 0; i < Math.floor(s.length / 2); i++) {
//     swap = s[left];
//     s[left] = s[right];
//     s[right] = swap;
//     left++;
//     right--;
//   }
//   return s;
// };

// console.log(reverseString("cat"));
// console.log(reverseString("bag"));
// console.log(reverseString("kayak"));
//this solution passes all of the tests in leetcode but is not console logging correctly

// TWO POINTERS PATTERN: COLT STEELE'S sumZero VID  #30
//given an array return the FIRSST two elements whose sum is zero
// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum == 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else if (sum < 0) {
//       left++;
//     }
//   }
// }
// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); //[-2,2]
// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]

// // //TWO POINTERS PATTERN:  O(n) => linear time
// // //TWO POINTERS PATTERN COLT STEELE'S COUNT UNIQUE VALUES
// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0;
//   let i = 0;
//   for (var j = 1; j < arr.length; j++) {
//     //arr[i] is initially the first element in the array and we compare it to the next element arr[j]
//     //if we arrive at a unique value, we increment i and we place that element(arr[j]) in its new address i
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//       //open the console to see how the array evolves as relocate our unique values to the front of the array
//       console.log(arr);
//     }
//     //open the console to see how our pointers shift j increments each iteration but i only increments as we encounter unique elements
//     console.log(i, j);
//   }
//   //we must add 1 to i bc indices begin at zero but as we count unique elements we follow the human convention of starting with 1
//   console.log(i + 1);
//   return i + 1;
// }
// countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]);

//SLIDING WINDOW LONGEST SUBSTRING
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
//this is a fast solution but it relies on sets; if you need to learn about sets check out this link
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// var lengthOfLongestSubstring = function (s) {
//   let n = s.length;
//   let i = 0,
//     j = 0,
//     ans = 0;
//   let set = new Set();
//   while (i < n && j < n) {
//     if (!set.has(s[j])) {
//       set.add(s[j++]);
//       ans = Math.max(ans, j - i);
//     } else {
//       set.delete(s[i++]);
//     }
//   }
//   return ans;
// };
// console.log(lengthOfLongestSubstring("abcabcbb")); //3 => The answer is "abc", with the length of 3.

//SLIDING WINDOW: MOVE ZEROES
//https://leetcode.com/problems/move-zeroes/
// function moveZeroes(nums) {
//   if (nums.length < 2) return nums;
//   let i = 0,
//     j = 1;
//   while (i < j && j < nums.length) {
//     if (nums[i] == 0 && nums[j] == 0) {
//       j++;
//       continue;
//     } else if (nums[i] === 0 && nums[j] != 0) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//     i++;
//     j++;
//   }
//   console.log(nums);
//   return nums;
// }
// moveZeroes([0, 1, 0, 3, 12]); //[1,3,12,0,0]
// moveZeroes([0]); //[0]

//SLIDING WINDOW: longest continuous increasing substring
// // https://leetcode.com/problems/longest-continuous-increasing-subsequence/
//CONNOR'S SOLUTION
// function findLengthOfLCS(nums) {
//   if (nums.length == 1) return 1;
//   if (nums.length == 0) return 0;

//   let result = 0;

//   let i = 0;
//   let j = 1;

//   while (j < nums.length) {
//     if (nums[j] > nums[j - 1]) {
//       j += 1;
//     } else {
//       i = j;
//       j += 1;
//     }

//     result = Math.max(result, j - i);
//   }

//   return result;
// }
// console.log(findLengthOfLCS([1, 3, 5, 4, 7]))//3
// console.log(findLengthOfLCS([1, 3, 5, 7]))//4
// console.log(findLengthOfLCS([2, 2, 2, 2, 2])); //1

//SLIDING WINDOW:Longest-Consecutive-Duplicate-String
////https://binarysearch.com/problems/Longest-Consecutive-Duplicate-String
// function longestRun(s) {
//   let result = 1;
//   let left = 0;
//   let right = 1;

//   while (right <= s.length) {
//     if (s[left] === s[right]) {
//       right++;
//       result = Math.max(result, right - left);
//     } else {
//       left = right;
//       right++;
//     }
//   }

//   return result;
// }
// console.log(longestRun("abbbba")); //4
// console.log(longestRun("aa")); //2
// console.log(longestRun("bbcbb")); //2

//FREQUENCY COUNTER
// FREQUENCY COUNTER: ANAGRAM
//https://leetcode.com/problems/valid-anagram/
// function isAnagram(s, t) {
//   let obj = {};
//   if (s.length != t.length) {
//     return false;
//   }
//   for (let letter of s) {
//     obj[letter] = obj[letter] + 1 || 1;
//   }
//   for (let char of t) {
//     if (!obj[char]) {
//       return false;
//     }
//     obj[char]--;
//   }
//   return true;
// }
// console.log(isAnagram("anagram", "nagaram")); //TRUE
// console.log(isAnagram("rat", "cat")); //FALSE
// console.log(isAnagram("cats", "catt")); //FALSE
// console.log(isAnagram("dormitory", "dirtyroom")); //TRUE

// FREQUENCY COUNTER: ANAGRAM ANOTHER APPROACH
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
//   }

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }
// console.log(validAnagram("iceman", "cinema"));
// console.log(validAnagram("iceman", "icemat"));

//FREQUENCY COUNTER MOST REPEATED:
// // Given an array of integers find the most repeated integer.
// function mostRepeated(arr) {
//   //create an object where the keys are the elements of arr
//   //and the values will be the frequency with which the elements appear in arr
//   let freqTracker = {};

//   //declare a variable called maxRepetition to contain the most repeated element
//   let maxRepetition = 0;

//   //iterate through the arr
//   for (let integer of arr) {
//     //define the keys and set the values with bracket notation
//     freqTracker[integer] = freqTracker[integer]++ || 1;
//     //track the key with the largest value
//     if (freqTracker[integer] > maxRepetition) {
//       maxRepetition = integer;
//     }
//   }
//   return maxRepetition;
// }
// console.log(mostRepeated([4, 4, 4, 4, 5, 5, 6, 6, 6, 1, 1, 4, 4, 4, 7])); // = 4
// console.log(mostRepeated([1])); // = 1

//FREQUENCY COUNTER TWO SUM: CONNOR'S SUPER CLEAN SOLUTION
//https://leetcode.com/problems/two-sum/
// var twoSum = function (nums, target) {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (hash[target - nums[i]] >= 0) {
//       return [i, hash[target - nums[i]]];
//     } else {
//       hash[nums[i]] = i;
//     }
//   }
// };
// console.log(twoSum([3, 2, 4], 6)); //[2, 1]

//FREQUENCY COUNTER PATTERN => O(2n) simplifies to O(n)
// same from Colt Steele's FREQUENCY COUNTER PATTERN lecture #27
//same accepts 2 arrays and returns true if every value in arr1 has
//it's corresponding value squared in the second array
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
//   }

//   for (let key in frequencyCounter1) {
//     //accounts for the situation where the second array is missing
//     //the square of one of the elements from the first array
//     if (!(key ** 2 in frequencyCounter2)) {
//       console.log(false);
//       return false;
//     }
//     //accounts for the situation where there is a squared version of each element
//     //from the first array in the second array but the frequency is not the same
//     //like in this data set same([1, 2, 3, 2, 5], [9, 1, 25, 4, 25])
//     //we would need to replace one of the 25s with a 4 for this to return true
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       console.log(false);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }

// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]); //false
// same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]); //true
// same([1, 2, 3, 2, 5], [9, 1, 25, 4, 25]); //false
// same([1, 2, 3, 2, 5], [9, 1, 25, 4, 25]); //false

//FREQUENCY COUNTER FROM COLT STEELE'S COURSE
// function countUniqueValues(nums) {
//   let answer = [];
//   let numsFrequency = {};
//   for (let num of nums) {
//     numsFrequency[num] = ++numsFrequency[num] || 1;
//   }

//   for (let num in numsFrequency) {
//     if (numsFrequency[num] == 1) {
//       answer.push(parseInt(num));
//     }
//   }
//   console.log(answer.length);
//   return answer.length;
// }
// countUniqueValues([1, 1, 2, 3, 3, 4, 5, 5, 6]); //3
// countUniqueValues([1, 2, 2, 5, 7, 7, 99]); //3
// countUniqueValues([]); //0
// countUniqueValues([-3, -3, 3, 1, 4, 7, 0]); //5

//RECURSION
// //https://leetcode.com/problems/reverse-string/
// //note: the 2 pointer solution is faster this is just an example of recursion
// //to illustrate how it works
// var reverseString = function (s) {
//     if (s.length == 0) {
//       return;
//     }
//     var temp = s[0];
//     s.shift(); //remove + return first element;
//     reverseString(s);
//     s.push(temp);
//   };
//   console.log(reverseString(["h", "e", "l", "l", "o"]));

//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript
// return 1 + nbYear(p0 * (1 + percent / 100) + aug, percent, aug, p);
// the 1 counts the current year and each time nbYear is called we an extra 1 is returned
// finally when our condition (p0 >= p) returns true 0 is returned
// put differently when we hit or exceed our target population 0 is returned

// given that recursion is calling the same function from inside of that function with different input
// how is our input changing? function nbYear(p0, percent, aug, p) accepts 4 arguments
// in the recursive solution, p0 changes with each recursive function call bc we are passing the function
// the solution of the previous call in the argument p0
// so on the first call p0 holds our intial population
// and in each recursive call p0 changes to reflect the previous year's growth which we calculated during the last call

// so what is happening in the call stack?
// how does our base case protect us from an infinite loop?

// function nbYear(p0, percent, aug, p) {
//   if (p0 >= p) {
//     return 0;
//   } else {
//     return 1 + nbYear(p0 * (1 + percent / 100) + aug, percent, aug, p);
//   }
// }
// console.log(nbYear(1500, 5, 100, 5000)); //15
//countDown accepts a number and counts down to 0
// function countDown(n) {
//   if (n == 0) return;
//   console.log(n);
//   countDown(n - 1);
// }
// console.log(countDown(3));

//OTHER RECURSIVE ALGOS TO TRY:
//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
//https://leetcode.com/problems/power-of-three/
// https://leetcode.com/problems/fibonacci-number/
//https://leetcode.com/problems/subsets/
//^^subsets problem will require backtracking

//SELECTION SORT
//// LEGACY VERSION SELECTION SORT(non ES2015 syntax)
// function sselectionSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     var lowest = i;
//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) {
//       //SWAP!
//       var temp = arr[i];
//       arr[i] = arr[lowest];
//       arr[lowest] = temp;
//     }
//   }
//   return arr;
// }
// console.log(sselectionSort([0, 2, 34, 22, 10, 19, 17]));
//// ES2015 VERSION SELECTION SORT
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }
// console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

//BUBBLE SORT

// function bubbleSort(arr) {
//   var noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

//https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript
// function bubblesortOnce(a) {
//   //Think about how this is different than a typical bubble sort
//   //we are not mutating the original array
//   //we are only doing one full pass so nested loops are not necessary
//   let copy = [...a];
//   let swap;
//   for (let i = 0; i < copy.length; i++) {
//     if (copy[i] > copy[i + 1]) {
//       swap = copy[i];
//       copy[i] = copy[i + 1];
//       copy[i + 1] = swap;
//     }
//   }
//   return copy;
// }
// console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8])); //[7, 5, 3, 1, 2, 4, 6, 8, 9]

//INSERTION SORT

// function insertionSort(arr) {
//   var currentVal;
//   for (var i = 1; i < arr.length; i++) {
//     currentVal = arr[i];
//     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentVal;
//   }
//   return arr;
// }
// console.log(insertionSort([2, 1, 9, 76, 4]));

//MERGE SORT

// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// console.log(mergeSort([10, 24, 76, 73]));
// console.log(mergeSort([5, 1, 4, 2, 3]));

//A DIFFICULT ALGO THAT REQUIRES RELIES ON A MERGE SORT AS PART OF THE SOLUTION:
// https://www.hackerrank.com/challenges/ctci-merge-sort/problem?h_r=internal-search
// function countInversions(arr) {
//   let count = 0;
//   const mergeSort = (array) => {
//     if (array.length === 1) {
//       return array;
//     }
//     const length = array.length;
//     const middle = Math.floor(length / 2);
//     const left = array.slice(0, middle);
//     const right = array.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));

//     function merge(left, right) {
//       let result = [];
//       let leftIndex = 0;
//       let rightIndex = 0;

//       while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//           result.push(left[leftIndex]);
//           leftIndex++;
//         } else if (left[leftIndex] > right[rightIndex]) {
//           count = count + (left.length - leftIndex);
//           result.push(right[rightIndex]);
//           rightIndex++;
//         } else {
//           result.push(left[leftIndex]);
//           leftIndex++;
//         }
//       }

//       // Concat the remaining elements from one of the array
//       return result.concat(
//         left.slice(leftIndex).concat(right.slice(rightIndex))
//       );
//     }
//   };

//   mergeSort(arr);
//   return count;
// }

// console.log(countInversions([2, 4, 1]));

//A RANDOM SORTING ALGO WE SOLVED TOGETHER
//https://www.hackerrank.com/challenges/closest-numbers/problem
// function closestNumbers(arr) {
//   let result = [];
//   arr.sort((a, b) => a - b);
//   let diff;
//   let minDiff = arr[arr.length - 1] - arr[arr.length - 2];
//   for (var i = arr.length - 2; i > 0; i--) {
//     diff = arr[i] - arr[i - 1];
//     minDiff = Math.min(diff, minDiff);
//   }

//   for (var i = 0; i < arr.length; i++) {
//     diff = Math.abs(arr[i] - arr[i + 1]);
//     if (diff == minDiff) {
//       result.push(arr[i], arr[i + 1]);
//     }
//   }
//   return result;
// }
// console.log(closestNumbers([5, 2, 3, 4, 1])); //[1,2,2,3,3,4,4,5]

//GOOD ALGO FOR STACKS
//https://leetcode.com/problems/backspace-string-compare/
// function backspaceCompare(S, T) {
//   let helper = (string) => {
//     let stack = [];

//     for (let char of string) {
//       if (char === "#" && !stack[0]) continue;
//       else if (char !== "#") {
//         stack.unshift(char);
//       } else if (char === "#") {
//         stack.shift();
//       }
//     }

//     return stack.join("");
//   };
//   console.log(helper(S) === helper(T));
//   return helper(S) === helper(T);
// }
// backspaceCompare("ab#c", "ad#c"); //ac=ac true
// backspaceCompare("ab##", "c#d#"); //""="" true
// backspaceCompare("ab##", "cdd#"); //""!="cd" false
//LINKED LISTS
//https://leetcode.com/problems/palindrome-linked-list/
//zetinator's solution 
// var isPalindrome = function (head) {
//     if (head == null) return head;
//     // fill the stack
//     let node = head;
//     let stack = [];
//     while (node) {
//       stack.push(node.val);
//       node = node.next;
//     }
//     // play backwards
//     console.log(stack);
//     for (let i = 0; i < stack.length/2; i++) {
//       console.log(i, stack.length - 1 - i);
//       if (stack[i] != stack[stack.length - 1 - i]) return false;
//     }
//     return true;
//   };
//https://binarysearch.com/problems/Insert-Into-Linked-List
// class Solution {
//     solve(head, pos, val) {
//         console.log(head, "<=head",pos, "<=pos", val, "<=val")
//        //create a node with a val of parameter "val"
//       let node2Insert =  new LLNode(val)
//       //handle edge case when we are adding the node to the beginning of the list
//       if(pos==0){
//           node2Insert.next= head;
//           head = node2Insert;
//       }else{
//        //we need a pointer to start at the head and stop at the correct position (the node before pos)
//        let pointer = head
//        for(let i = 0; i < pos - 1; i++){
//            pointer = pointer.next
//        }
//        console.log(pointer.val)
//        //we need to set our new node's next to our pointer's next
//        node2Insert.next = pointer.next
      
//        //set our pointer's next to the new node
//         pointer.next = node2Insert
//       }
//         return head
//     }
// }
//https://leetcode.com/problems/delete-node-in-a-linked-list/
// var deleteNode = function(node){
//     node.val = node.next.val;
//     node.next = node.next.next
// };
// https://www.hackerrank.com/challenges/compare-two-linked-lists/problem
// function CompareLists(llist1, llist2) {
//     while(llist1 && llist2){
//         if(llist1.data !== llist2.data){
//             return 0
//             }
//         llist1 = llist1.next
//         llist2 = llist2.next
//     }
//     ​
//     if(llist1 || llist2){
//         return 0
//     }
//     return 1
//     }
//https://binarysearch.com/problems/A-Strictly-Increasing-Linked-List
// class Solution {
//     solve(head) {
//         let prev = head
//         let current = head.next
       
       
//         while(current){
//             if(prev.val >= current.val){
//                 return false
//             }
//             prev = prev.next
//             current = current.next
//         }
//         return true
//     }
// }
//https://leetcode.com/problems/reverse-linked-list/submissions/
// var reverseList = function(head) {//12345
//     let prev = null
//     let current = head //12345 
//     while (current) {//12345 2345 345 45 5 null => the loop breaks
//      next = current.next; //2345 345 45 5 null
//      current.next = prev;//null 1 21 321 4321 
// //prev is just current with an updated next. The updated next points to the last iteration's prev
//       prev = current;//1=>null, 2=>1=>null, 3=>2=>1=>null, 4=>3=>2=>1=>null, 5=>4=>3=>2=>1=>null   
//       current = next;// 2345 345 45 5 null
//     }
//     console.log(prev, "prev")
//     return prev;
// };
//https://binarysearch.com/problems/Replace-Linked-List-on-Index
//my solution
// class Solution {
//     solve(a, b, lo, hi) {
//         let currentNodeA = a
//         let index = 0
//         let prevNode
//         let loNodesPrev
//         let hiNode 
//         //get the node immediately preceding lo so we can attach that node to b
//         //get the hi node so we can attach b's tail to it next
//         while(currentNodeA){
//             if(index == lo){
//                 loNodesPrev  = prevNode
//             }
//             if(index == hi){
//                 hiNode  = currentNodeA
//             }
//             index++
//             prevNode = currentNodeA
//             currentNodeA = currentNodeA.next
//         }
//          let currentNodeB = b
//          let tailB 
//          //get b's tail
//          while(currentNodeB){
//          tailB = currentNodeB
//            currentNodeB = currentNodeB.next
//          }
//          //if there are any nodes following our hi cutoff, append them to b
//        if(hiNode.next){
//            tailB.next =  hiNode.next
//            }
        
//         //handle edge case where lo is 0
//         if(loNodesPrev){
//             loNodesPrev.next = b
//              return a 
//         }else{
//             //remember b now includes any nodes we've attached from a
//             return b
//         }
       
//     }
// }
//Chris faster than 100% solution
// class Solution {
//     solve(a, b, lo, hi) {
//         let bridgeNode = null,
//             landingNode = null,
//             currentANode = a,
//             prevNode = null
//         let count = 0
//   ​
//         //traverse LL a counting the indices until we've reached the index before the lo node
//         //save this as bridge node
//         //continue iterating until we reach the index of the hi node
//         //save the hi node's .next as landing node
//         while (count <= hi) {
//             if (count === lo) {
//                 //edge case where you replace first node
//                 if (count === 0) bridgeNode = b
//                 else bridgeNode = prevNode
//             }
//             if (count === hi) {
//                 //edge case, replace to end of LL
//                 if (currentANode.next === null) landingNode = null
//                 else landingNode = currentANode.next
//             }
//             prevNode = currentANode
//             currentANode = currentANode.next
//             count += 1
//         }
//   ​
//         if (lo === 0) {
//             let currentBNode = b
//             while (currentBNode.next) {
//                 currentBNode = currentBNode.next
//             }
//             currentBNode.next = landingNode
//   ​
//             return b
//         } else {
//             //set bridge node .next to be b
//             bridgeNode.next = b
//   ​
//             //iterate thru b until .next = null and set .next to be landing node
//             let currentBNode = b
//             while (currentBNode.next) {
//                 currentBNode = currentBNode.next
//             }
//             currentBNode.next = landingNode
//   ​
//             //return a
//             return a
//         }
//     }
//   }

