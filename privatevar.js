function createperson(name){
  let age=0;

  return{
    getname: function(){
      return name;
    },
    getage: function(){
      return age;
    },
    birthday: function(){
      age++
    }
  };
}

let person = createperson("Deen");
console.log(person.getname());
console.log(person.getage());
console.birthday();
console.log(person.getage());
