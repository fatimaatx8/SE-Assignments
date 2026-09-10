let password = prompt("Enter a password to analyze:");
let passwordLength;
let strength;
let containsNumbers;
let containsUppercase;
let feedback;


//checking length
if(password.length < 6){
  passwordLength= 'weak'
}
else if(password.length<=10){
  passwordLength= 'medium'
}
else {
  passwordLength='strong'
}


//checking numbers
if(password.includes("0")||
  password.includes("1") ||
  password.includes("2") ||
  password.includes("3") ||
  password.includes("4") ||
  password.includes("5") ||
  password.includes("6") ||
  password.includes("7") ||
  password.includes("8") ||
  password.includes("9"))
  {
    containsNumbers='Yes'
  }
else{containsNumbers='No'}


//checking upper case
if(password!==password.toLowerCase()){
  containsUppercase='Yes'
}
else{
  containsUppercase='No'
}


//checking strength
if(passwordLength==='strong' && containsNumbers==='Yes' && containsUppercase==='Yes'){
  strength= 'Strong'
  feedback='Great password!'
}
else if (passwordLength === 'medium' && containsNumbers === 'Yes') {

    strength = 'Medium'
    feedback = 'Consider adding uppercase letters for a stronger password'
}
else{
  strength='Weak'
  feedback='Consider adding more characters, numbers, and uppercase letters to your password'
}

//output
console.log(`
-Length: ${passwordLength}
-Contains numbers: ${containsNumbers}
-Contains uppercase: ${containsUppercase}
-Strength: ${strength} (${feedback})
`)
