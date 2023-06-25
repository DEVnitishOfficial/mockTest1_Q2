// First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0

// Example 2:
// Input: s = "loveleetcode"
// Output: 2

// Example 3:
// Input: s = "aabb"
// Output: -1

// TIME COMPLEXITY →  O(n) iterating over the loops only once 
// SPACE COMPLEXITY → O(1) due to limited letter in english alphabet that we are storing in countChar obj

function findUniqueChar(s){
    let countChar = {}  // creating a object to keep track of the string element count
    let sChar;

    for(let i = 0; i < s.length; i++){ // iterating over loop for storing the uniqe character in the countChar object
        sChar = s[i];
        countChar[sChar] = (countChar[sChar] || 0) + 1
    }

    for(let i = 0; i < s.length; i++){
        sChar = s[i];
        if(countChar[sChar] === 1){  // iterating over loop for finding the unique character
            return i;
        }
    }
    return -1
}

const result = findUniqueChar("leetcode")  // leetcode  "loveleetcode" , "aabb"
console.log("The index of Unique character is : ", result);
  