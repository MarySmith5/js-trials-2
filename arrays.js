"use strict";


// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

const pi = printIndices(['apple', 'berry', 'cherry'])
console.log(pi)



// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items) {
    if (i % 2 === 0){
      result.push(items[i]);
    }
  }
  console.log(result)
}

const eoi = everyOtherItem([0, 1, 2, 3, 4, 5, 6, 7, 'done'])
console.log(eoi)




// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse((a, b) => a - b);
  console.log(sortedNItems)

}

const sni = smallestNItems([1, 30, 4, 21, 100000], 2)
console.log(sni)