//instead of doing this
let numbers =[1,2,3,4];
let evens = numbers.filter(function(n){
  return n % 2 === 0;
});

//then do this

let events = numbers.filter(n => n% 2 === 0);
