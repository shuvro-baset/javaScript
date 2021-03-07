// define a function
function def(){
    // write what you wanna do in this function.... 
    console.log("this is my first function")
}
def();

// define a function with parameters
function mul(num){
    var result = num * 5;
    console.log(result);
}
// calling function and passing a params value
mul(5);

// multiple parameters funciton
function add(num1, num2){
    var result = num1 + num2;
    console.log(result);
}
add(23,17)


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