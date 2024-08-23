function createheavyclosure(){
  let largeArr = new Array(1000000).fill("date");
  return function(){
    console.log(largeArr.length);
  };
}

let heavyclosure = createheavyclosure();
heavyclosure();
