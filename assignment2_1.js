
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /):");

if(operation=== '+'){
    console.log(`Result: ${num1}+${num2}= ${num1 + num2} `)
}
else if(operation=== '-'){
    console.log(`Result: ${num1}-${num2}= ${num1-num2} `)
}
else if(operation=== '*'){
    console.log(`Result: ${num1}*${num2}= ${num1*num2} `)
}
else if(operation=== '/'){
    if(num2===0){
    console.log("Error: Division by zero is not allowed.")
    }
    else{
        console.log(`Result: ${num1}/${num2}= ${num1/num2} `)
    }
}


