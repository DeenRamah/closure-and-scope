let globalvar = "am global";
function localScope(){
  let localvar = "Am local";
  console.log(globalvar);//accessible
  console.log(localvar);//accessible
}

localScope(){
  console.log(localvar);//error
}
