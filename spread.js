let arr1 = [1,2];
let arr2 = [3,4];
let combined = arr1.concat(arr2)
//use this instead
let combined = [...arr1, ...arr2];
