console.log("===Celsius to Fahrenheit Converter===");
let degreeCelsius=Number(prompt("Please enter a temperature degree in Celsius:"));
const isTempValid=!isNaN(degreeCelsius);
const isEmpty= degreeCelsius=="";
const isPositive= degreeCelsius>0;
const isNegative= degreeCelsius<0;
const isZero= degreeCelsius===0;
const isFreezing= degreeCelsius<0;
const isBoiling= degreeCelsius>100;
const isLiquid= !isFreezing && !isBoiling;
let result1= Number((degreeCelsius*9/5).toFixed(2));
let result2= result1+32;
// output
console.log(`===Temperature Input Analysis===
Input: ${degreeCelsius}
Converted to Number: ${degreeCelsius}
Input is Empty: ${isEmpty}
Is valid number: ${isTempValid}
Is positive: ${isPositive}
Is negative: ${isNegative}
Is zero: ${isZero}

===Mathematical Conversion===
${degreeCelsius} is Celsius:
   Formula: (${degreeCelsius} × 9/5) + 32
   Step 1: ${degreeCelsius} × 9/5 = ${result1}
   Step 2: ${result1} + 32 = ${result2}°F

===Temperature Comparisons===
Temperature: ${degreeCelsius}
Below freezing point of water (0°C): ${isFreezing}
Above boiling point of water (100°C): ${isBoiling}
Would be liquid water: ${isLiquid}

Thank you for using the Temperature Converter!`)