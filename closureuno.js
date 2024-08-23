function outerfunction(){
  let outervar = "am outer";
  function innerfunction(){
    console.log(outervar);//accessible
  }
  return innerfunctio();
}

let closurefunction = outerfunction();
closurefunction();//am outer
