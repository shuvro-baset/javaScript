// object is a set of data that can be arrange very efficiently
// it has some property and value.
var obj = {
    a : 10,
    b:15,
}
// we can add new data into an object outside of the object variable using point notation.
obj.z = 17
console.log(obj)


// ------- object --------- //
// define object
var obj = {name: "shuvro", age: 28, phone: "1675"}
console.log(obj)
// calling object property 1st way
var objName = obj.name
console.log(objName)
// calling object property 2nd way
var objName2 = obj["name"]
console.log(objName2)

// create an object using constructor(Object())
var ob = Object()
ob.a = 10
console.log(ob)
// another way 
var ob2 = new Object()
ob2.a = 10
console.log(ob2)

// accessing the object properties. we can access the properties in two ways. dot notation and array notation.
console.log(obj.b)
console.log(obj['b'])

// updating the object
obj.a = 100
// adding new properties
obj.c = 200
console.log(obj)

// remove properties using delete operator
delete obj.c
console.log(obj)

// comparing two object
var obj1 = {
    a: 10, 
    b : 200
}
var obj2 = {
    a: 10, 
    b : 200
}
console.log(obj1===obj2) // it will return false. cause their object address was not same.
// if we want to compare object we should use their properties
if (obj1.a===obj2.a && obj1.b===obj2.b) {
    console.log(true)
} else{
    console.log(false)
}
// another way using json.stringify
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

// object properties traverse 
console.log('x' in obj1) // x is not in obj1. so it will return false

for (var i in obj1) {
    console.log(i + ': ' + obj1[i])
}

// keys method shows key of object
console.log(Object.keys(obj1))
// values method shows value of keys
console.log(Object.values(obj))
// entries method shows entries keys and values
console.log(Object.entries(obj))

// if we set an object into another object then all changes will affect the object
// var obj2 = obj1
// obj2.c = 100
// console.log(obj2)
// console.log(obj1)

// if we use assign method then it did not affect the object
var obj2 = Object.assign({}, obj)
obj2.x = 45
console.log(obj2)
console.log(obj)
