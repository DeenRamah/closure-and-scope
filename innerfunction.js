function counter(){
  let count =0;
  return function(){
    count++;
    return count;
  }}
let increament = counter();
console.log(increament());
console.log(increament());
