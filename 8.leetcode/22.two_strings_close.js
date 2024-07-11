/* 
Two strings are considered close if you can attain one from the other 
using the following operations:
Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into 
another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.
Given two strings, word1 and word2, return true if word1 and word2 are close, 
and false otherwise.
*/
/* !ALGORITIM
    1. length
    2. Frequency Map FM1 and FM2
    3. FM -> keys compare size
    4. have same characters
    5. values -> sort -> array {a:2,  b:3} {g:3, h:2} not close
    6. array -> string -> compare
*/

var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  if (word1 === word2) return true;

  const freqMap1 = new Map();
  const freqMap2 = new Map();

  for (const char of word1) {
    freqMap1.set(char, (freqMap1.get(char) || 0) + 1);
  }
  for (const char of word2) {
    freqMap2.set(char, (freqMap2.get(char) || 0) + 1);
  }
  /*
  const characters1 = new Set(freqMap1.keys());
  const characters2 = new Set(freqMap2.keys());

  if (characters1.size !== characters2.size) return false;

   const haveSameCharacters = [...characters1].every((char) =>
    characters2.has(char)
  );
  if (!haveSameCharacters) return false; */

  for (const [key] of freqMap1) {
    if (!freqMap2.has(key)) return false;
  }
  console.log(freqMap1.values());
  const sortedFreq1 = Array.from(freqMap1.values()).sort((a, b) => a - b);
  const sortedFreq2 = Array.from(freqMap2.values()).sort((a, b) => a - b);

  const areFreqIdentical = sortedFreq1.join("") === sortedFreq2.join("");
  if (!areFreqIdentical) return false;

  return true;
};

word1 = "cabbba";
word2 = "abbccc";
console.log(closeStrings(word1, word2));
