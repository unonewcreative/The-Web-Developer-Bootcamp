// For loops
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 1; i <= 20; i += 2) {
//     console.log(i);
// }
// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }
// for (let i = 25; i >= 0; i -= 5) {
//     console.log(i);
// }

// Inifinite loop
// See example course
// Looping over arrays

// Exercise
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// Nested loops
// const seatingChart = [
//     ["Kristen", "Erik", "Namita",],
//     ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//     ["Yuma", "Sakura", "Jack", "Erika"]
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// While loop
// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }
// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!")

// The break keyword
// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!!")

// Guessing game
let maximum = parseInt(prompt("Enter the maximum number!"));
if (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;


