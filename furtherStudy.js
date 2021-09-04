"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);
  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word)
    }
  }
  
  return (Array.from(result));
}
console.log(wordsInCommon(['I', 'me', 'me', 'she', 'it'], ['I', 'he', 'it']))


function kidsGame(names) {
  const output = [names.shift()];
 
  const firstLettersToWords = {};

  for (const name of names) {
    if (firstLettersToWords[name[0]] === undefined){
      firstLettersToWords[name[0]] = [name];
    }
    else {
      firstLettersToWords[name[0]].push(name);
    }
  }

  while (true) {
    const lastWord = output[output.length - 1];
    const startLetter = lastWord[lastWord.length - 1];

    if (
      firstLettersToWords[startLetter] === undefined ||
      firstLettersToWords[startLetter].length === 0
      ) {
      break;
    }
    let word = firstLettersToWords[startLetter].shift(0);
    output.push(word);
  }
  
  return output;  
}
console.log(kidsGame(["noon", "naan", "nun"]))