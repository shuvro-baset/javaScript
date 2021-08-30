 // using object litetal
const student = {name: "sakib", job: "cricketer"}
// constructor
const person = new Object();
 
// create method. must refer an object or null. one kind of inheritance
const human = Object.create(student);
console.log(human.job); // this will return a job property from student object

