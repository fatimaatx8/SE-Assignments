const correctPin="1234"
let accountBalance= 1000.00
let attempts=3
let pin=''
let x=''
let amount=''
while(attempts>0 && pin!==correctPin){
  pin=prompt("Enter your PIN:")
  if(pin===correctPin){
    break;
  }
  attempts=attempts-1
  console.log(`Incorrect PIN. Attempts left: ${attempts}`)
  if(attempts===0){
    console.log("Account locked due to too many incorrect attempts.")
  } 
}

if(pin===correctPin){
  console.log(`Current balance: ${accountBalance}`)
  while(x!=='2'){
    x=prompt(`Choose an option:
   1. Withdraw
   2. Exit
    `)
    if(x==='1'){
      amount=prompt("Enter withdrawal amount:")
      if(amount>accountBalance){
        console.log("Insufficient funds. Please enter a smaller amount.")}
      else if(amount<0){console.log("Invalid. please enter a positive value!")}
      else{
      accountBalance=accountBalance-amount
      console.log(`withdrawal successful. New balance: ${accountBalance} `)
      }
    }
    else if(x==='2'){
      console.log("Thank you for using our ATM machine!")
    }
    
    
  }
  
}