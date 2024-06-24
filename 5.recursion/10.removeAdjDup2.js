/* 
    remove adjacent duplicates
    
    let inputString = "aabcc"
    output = "b"
*/

function removeConsecutiveDuplicates(string) {
  let result = "";
  let length = string.length;
  let i = 0,
    j = 1,
    k = 2;
  if (string[0] !== string[1]) {
    result += string[0];
  }

  while (string[k]) {
    console.log(`i: ${i}, j:${j}, k:${k}`);
    if (string[j] === string[i] || string[j] === string[k]) {
      // j is repeated so ignore
    } else {
      result += string[j];
    }
    i++;
    j++;
    k++;
  }
  if (string[length - 1] !== string[length - 2]) {
    result += string[length - 1];
  }

  return result;
}

function removeAJD(str) {
  let temp = str.toLowerCase();
  if (str === "") return "";

  if (temp[0] === temp[1]) {
    if (temp[1] !== temp[2]) return removeAJD(str.substring(2, str.length));

    return removeAJD(str.substring(1, str.length));
  }

  return str[0] + removeAJD(str.substring(1, str.length));
}

let string = "Baannat Manaa fFrrfrom GgddGotham".toLowerCase();
console.log(removeConsecutiveDuplicates(string));
console.log(removeAJD(string));
console.log(removeAJD("Baannat Manaa fFrrfrom GgddGotham"));
