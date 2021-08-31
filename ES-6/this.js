// implicit binding 
// explicit binding 
// new binding 
// window binding 

/*
// implicit binding 
var sakib = {
    name: 'sakib',
    age: 35,
    printName: function() {
        console.log(this.name)
    }
}
sakib.printName();

var printPlayerName = function(obj) {
    obj.printPlayerName = function() {
        console.log(this.name)
    }
}

var sakibl = {
    name: 'sakib',
    age: 35
}
var tamim = {
    name: 'tamim',
    age: 35
}
printPlayerName(sakibl);
printPlayerName(tamim);
sakibl.printPlayerName();
tamim.printPlayerName();
*/
// explicit binding
// using bind or apply method to call the method.
var printName2 = function(v1, v2, v3) {
    console.log(`${this.name} is ${v1} and ${v2} and ${v3}`);
};
var sakib3 = {
    name: 'sakib3',
    age: 35
}
var v1 = "handsome";
var v2 = "All rounder";
var v3 = "Best player";
printName2.call(sakib3,v1, v2, v3);


// new binding
function Person(name, age) {
    // let this = object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`)
}
var sakib = new Person("sakib", 35)



// window binding, when there is no above methods call then it will define by default the window binding
 