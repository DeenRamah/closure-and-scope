//instead of doing this
let person = {name="John", age: 25};
let name = person.name;
let age = person.age;

//then do this
let {name, age} = person;
