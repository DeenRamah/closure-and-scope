//instead of doing this
let name;
if(userName){
  name = userName;
} else{
  name = 'Guest';
}

//do this
let name = userName || 'Guest';
