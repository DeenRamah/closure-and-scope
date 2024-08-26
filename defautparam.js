//instead of doing this
function greet(name){
  name = name|| 'Guest';
  return `Hello` + name;
}
// then do this
 function greet(name = 'Guest'){
   return `Hello ${name}`
 }
