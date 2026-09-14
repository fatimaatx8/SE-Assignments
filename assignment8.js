// Create a password validation system that:
// 1. Checks multiple password requirements
// 2. Stops checking when first requirement fails (break)
// 3. Skips certain characters during analysis (continue)
// 4. Provides detailed feedback

let requirementNames = [
    "Length (8+ characters)",
    "Contains uppercase",
    "Contains lowercase", 
    "Contains number",
    "Contains special character"]
let requirementTests = [false, false, false, false, false];

let testPasswords = ["weak", "StrongPass123!", "NoNumbers!", "nocaps123"];
for(let i=0; i<testPasswords.length; i++){
  
   requirementTests = [false, false, false, false, false];
    const specialChars = /[!@#$%^&*()_+\-=\[\]{}|;:'",.<>?\/`~\\]/
    let foundUppercase = [];
    let foundLowercase = [];
    let foundNumbers = [];
    let foundSpecial = [];
    let strength=''
    let countTrue=0
  console.log(`===Testing Password: ${testPasswords[i]}===`)
  if(testPasswords[i].length <= 8){
    console.log(`skipping analysis, password too short`)
    continue
  }else{
    
  for(let j=0; j<testPasswords[i].length; j++){
    let char=testPasswords[i][j]
     if (char === " " || char === "\t" || char === "\n") {
                continue
            }
    if(char>='A'&& char<='Z'){
      foundUppercase.push(char)
    }
    else if(char>='a'&& char<='z'){
      foundLowercase.push(char)
    }
    else if(char>='0' && char<='9'){
      foundNumbers.push(char)
    }
    else if(specialChars.test(char)===true){
      foundSpecial.push(char)
    }
   
   
  }
  }
  if (foundUppercase.length>0){
   console.log( `-found uppercase: ${foundUppercase.join()}`)
  }
  if (foundLowercase.length>0){
   console.log( `-found lowercase: ${foundLowercase.join()}`)
  }
  if (foundNumbers.length>0){
   console.log( `-found numbers: ${foundNumbers.join()}`)
  }
  if (foundSpecial.length>0){
   console.log( `-found special characters: ${foundSpecial.join()}`)
  }

  requirementTests[0]= testPasswords[i].length>=8
  requirementTests[1]= foundUppercase.length>0
  requirementTests[2] = foundLowercase.length>0
  requirementTests[3] = foundNumbers.length>0
  requirementTests[4] = foundSpecial.length>0
  

  for(let k=0; k<requirementNames.length; k++){
    if(requirementTests[k]===true){
      countTrue++
    }
    if(countTrue===5){
      strength='Strong password!'
    }else if(countTrue>=3 && countTrue<5){
      strength='Moderate password!'
    }else{
      strength='Weak password!'
    }
    console.log(`-${requirementNames[k]}: ${requirementTests[k]} `)
  }
  console.log(`OVERALL RESULT: ${strength} (${countTrue}/5)`)
}



// TODO: Use loops with break/continue to:
// - Check each character for uppercase, lowercase, numbers, special chars
// - Skip whitespace characters with continue
// - Break early if password is clearly weak
// - Provide specific feedback for each requirement



// TODO: Test each password and show validation results