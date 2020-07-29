// ///mine::::
// function minimumBribes(queue) {
//   // [1, 2, 3, 4, 5]
//   // [2, 1, 3, 5, 4]
//   let totalBribes = 0;
//   let chaotic = false;
//   queue.forEach((person, position) => {
//     const p = position + 1;
//     const index = queue.indexOf(person) + 1;
//     let movement = 0;

//     if (index < person) {
//       movement = person - index;

//       if (movement >= 3) {
//         chaotic = true;
//       }
//     } else if (p > person) {
//       const range = p - person;

//       for (let index = person; index >= queue.length - range; index--) {
//         let collectiveMovement = 0;
//         if (queue[index] > person) {
//           collectiveMovement += 1;
//         }
//         movement += collectiveMovement;
//       }
//     }

//     totalBribes = totalBribes + movement;
//   });
//   if (chaotic) {
//     return "Too chaotic";
//   } else {
//     return totalBribes;
//   }
// }

// let totalBribes = 0;
// let chaotic = false;
// queue.forEach((person, position) => {
//   const index = queue.indexOf(person) + 1;
//   let movement = 0;

//   if (index < person) {
//     movement = person - index;

//     if (movement >= 3) {
//       chaotic = true;
//     }
//   } else if (person > queue[position + 1]) {
//     if (person > queue[position + 2]) {
//       movement = 2;
//     } else {
//       movement = 1;
//     }
//   }

//   totalBribes = totalBribes + movement;
// });

// if (chaotic) {
//   return "Too chaotic";
// }

// return totalBribes;

// at just under 30 mins:
//Unfinished, but close:

// function minimumBribes(queue) {
//   let totalBribes = 0;
//   let chaotic = false;
//   queue.forEach((person, position) => {
//     const index = queue.indexOf(person) + 1;
//     if (index < person) {
//       const movement = person - index;
//       if (movement >= 3) {
//         chaotic = true;
//       }
//       totalBribes = totalBribes + movement;
//     }
//   });
//   if (chaotic) {
//     return "Too chaotic";
//   }
//   return totalBribes;
// }

// module.exports = { minimumBribes };

//further steps to complete:
// fix a bug of 1 less than expected.

// solution to understand::::
// function minimumBribes(queue) {
//   let bribes = 0;

//   const originalOrder = [];
//   for (let i = 0; i < queue.length; i++) {
//     originalOrder[i] = i + 1;
//   }

//   for (let i = 0; i < queue.length; i++) {
//     if (queue[i] !== originalOrder[i]) {
//       // console.log(originalOrder);
//       // console.log(i);
//       if (queue[i] === originalOrder[i + 1]) {
//         bribes++;

//         let temp = originalOrder[i];
//         originalOrder[i] = originalOrder[i + 1];
//         originalOrder[i + 1] = temp;
//       } else if (queue[i] === originalOrder[i + 2]) {
//         bribes += 2;
//         let temp = originalOrder[i];
//         console.log("beofre", originalOrder);
//         originalOrder[i] = originalOrder[i + 2];
//         originalOrder[i + 2] = originalOrder[i + 1];
//         originalOrder[i + 1] = temp;
//         console.log("after", originalOrder);
//       } else {
//         return "Too chaotic";
//       }
//     }
//   }

//   return bribes;
// }

module.exports = { minimumBribes };
