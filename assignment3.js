console.log("🧠 Welcome to the JavaScript Quiz!");

let score = 0;
let totalQuestions = 8;

// Question 1
let answer1 = prompt("What is 2 + 2?");
if (answer1 === "4") {
    console.log("✅ Correct!");
    score = score + 1;
} else {
    console.log("❌ Wrong! The answer is 4.");
}

// Question 2  
let answer2 = prompt("What programming language are we learning?");
if (answer2.toLowerCase() === "javascript") {
    console.log("✅ Correct!");
    score = score + 1;
} else {
    console.log("❌ Wrong! We're learning JavaScript.");
}

// Question 3
let answer3 = prompt("Is JavaScript the same as Java? (yes/no)");
if (answer3.toLowerCase() === "no") {
    console.log("✅ Correct! They're completely different!");
    score = score + 1;
} else {
    console.log("❌ Wrong! JavaScript and Java are different languages.");
}
// Question 4
let answer4 = prompt("which keyword is used to declare a variable whose value can be changed?")
if(answer4.toLowerCase()==="let"){
   console.log("✅ Correct!")
   score++
} else{
  console.log("❌ Wrong! let is the correct answer")
}

// Question 5
let answer5 = prompt("What does password.length return if password contains the string hello?")
if(answer5.toLowerCase()==='five'|| answer5==='5'){
  console.log("✅ Correct!")
   score++
} else{
  console.log("❌ Wrong! 5 is the correct answer")
}

// Question 6
let answer6 = prompt("Which symbol is used for a single line comment in JavaScript?");
if (answer6 === "//") { 
  console.log("✅ Correct!");
  score++; }
else { console.log("❌ Wrong! // is used for a single line comment.") }
// Question 7 
let answer7 = prompt("Which function is used to print something to the console?") 
if (answer7 === "console.log") {
  console.log("✅ Correct!")
  score++ }
else { console.log("❌ Wrong! console.log is the correct answer.") } 


// Question 8 
let answer8 = prompt("What data type is Hello?")
if (answer8.toLowerCase() === "string") { 
  console.log("✅ Correct!")
  score++ }
else { 
  console.log("❌ Wrong! Hello is a string.")
} 


// Final Score Analysis

console.log("\n🎯 Quiz Complete!");
console.log("Your score: " + score + "/" + totalQuestions);

if (score === totalQuestions) {
    console.log("🏆 Perfect score! You're a JavaScript genius!");
} else if (score >= 6) {
    console.log("👍 Great job! You have a good understanding of JavaScript!");
} else if (score >= 4) {
    console.log("📚 Not bad! Keep practicing and you'll improve!");
} else {
    console.log("💪 Keep studying! Review the material and try again!");
}

