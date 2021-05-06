var a = 'Shuvro baset wants to Be A good Programmer.'
// convert a string in to lowercase 
console.log(a.toLowerCase())
//for uppercase 
console.log(a.toUpperCase())

// finding position of a string or word or letter ** if the word or letter is not present it will return (-1)
console.log(a.indexOf('a'))

// spliting 
console.log(a.split(" "))


// ----- type conversion ----- //
var x = 10;
var y = 5;
var z = '3';

// convert string to number using "parseFloat/parseInt" ** shortcut technique- use + sign to change string to number(int)
z = parseInt(z);

// number to string conversion -- just use " " empty and + sign
z = " " + z;
console.log(typeof (z));

// --- Math operation like (+/-/*/.. )

var num1 = 75;
var num2 = 23;
var add = num1 + num2;
console.log(add)
var minus = num1 - num2;
console.log(minus)

var mul = num1 * num2;
console.log(mul)

var div = num1 / num2;
console.log(div)

var mod = num1 % num2;
console.log(mod)

var negativeValue = -5;
negativeValue = Math.abs(negativeValue);
console.log(negativeValue)

// round function change the number in integer number. 0.5 er besi hole uporer dike full korbe niche hole nicher dike. 
var r = 4.75;
var r = Math.round(r)
console.log(r)
// ceil function directly porer purno sonkha return korbe
var c = 4.23;
var c = Math.ceil(c);
console.log(c)
// floor function fractional part remove kore dibe.
var f = 6.24;
var f = Math.floor(f)
console.log(f)


// escape notation for string 

var st = "Here I am trying to 'escape' a string";
var st1 = "Here I am trying to \'escape'\ a string";

console.log(st)
console.log(st1)

//  string comparison. javaScript can compare two strings using 'Lexicolgraphic' order. this order start from small letters
//  like in this time a>A 
// javaScript comparison between string and number it will convert that string into number at first. 
// substr(4)
// startsWith("")
// endsWith("")
// trim() .... space remove
// var.split(' ')