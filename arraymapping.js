//instead of doing this
let numbers =[1,2,3];
let doubled = numbers.map(function (n){
  return n * 2;
});

//then do this
let doubled = numbers.map(n => n * 2);
