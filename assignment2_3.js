let itemPrice = Number(prompt("Enter item price:"));
let quantity = Number(prompt("How many items?"));
let isMember = prompt("Are you a VIP member? (yes/no)");
let subTotal= itemPrice*quantity;
let discount;
let vipDiscount;
let shipping;
if(subTotal>50){
  discount=Math.ceil(0.1*subTotal);
  total=subTotal-discount;
  if(isMember==='yes'){
    vipDiscount=Math.ceil(0.05*total)
    total=total-vipDiscount
  }
}
else if(isMember==='yes'){
  vipDiscount=Math.ceil(0.05*subTotal)
    total=subTotal-vipDiscount
}
else{
  total=subTotal
  discount=0
  vipDiscount=0
}
if(total>100){
  shipping='free'
}
else{
  shipping=5
}
//output
console.log(`---
Item price: $${itemPrice}
Quantity: ${quantity}
Subtotal: $${subTotal}
Discount: $${discount}
VIP Discount: $${vipDiscount} 
Shipping: $${shipping}
Total: $${total}

`)

