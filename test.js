const num = (number)=>{
  if(number<1 || number > 5){
    return false;
  }
  else{
    return true
  }
}
console.log(num(1));
console.log(num(2));
console.log(num(3));
console.log(num(4));

console.log(num(5));

console.log(num(-1));
console.log(num(-7));
console.log(num(7));
console.log(num(6));
console.log(num(10));

