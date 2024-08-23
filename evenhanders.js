function setupclickhander(){
  let count =0;
  document.getElementById("button").addEventListener("click", function(){
    count++;
    console.log(`Button clicked ${count} times`)
  });
}

setupclickhandler();
