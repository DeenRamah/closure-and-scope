//instead of doing this 
let temp = a;
a = b;
b = temp;

//then do this
[a, b] = [b, a];
