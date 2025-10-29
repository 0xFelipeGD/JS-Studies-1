// Basic for loop example
for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}

// For loop with an array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// For...of loop (modern syntax)
for (const fruit of fruits) {
  console.log(fruit);
}
