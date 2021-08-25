/*
const name = 'shuvro';
var myName =  `my name is ${name}`;
console.log(myName);
var myObj = { 
    name: 'shuvro', 
    age: '29',
    profession: 'full-stack developer',
}
console.log(`I am ${myObj.name}, my age is ${myObj.age} and I am ${myObj.profession}`);


var arrowFunc = number => {
    return number/5;
}
console.log(arrowFunc(10));

var arrowFunc2 = (num1, num2) => {
    return (num1 +2) * ( num2+2);
}
console.log(arrowFunc2(10,5));

var arrowFunc3 = (num1, num2,num3) => {
    const result = num1 * num2 * num3;
    return result;
}
console.log(arrowFunc3(10,2,.5))

var arrowFunc4 = (num1, num2) => {
    const doubleFirstParam = num1 + 2;
    const doubleSecondParam = num2 + 2;
    const result = doubleFirstParam * doubleSecondParam;
    return result;
}
console.log(arrowFunc4(2,3))

const name ="Arrow function";
let me = { 
 name: "Regular function", 
 thisInArrow:() => { 
   console.log("Example of " + this.name); //no 'this' binding here 
 }, 
 thisInRegular(){ 
   console.log("Example of " + this.name); //'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();

var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    
    console.log(greeter) // "say Hello instead"


var numberArray = [1,2,3,4,5,6,7];
var multipleByFive = numberArray.map(n => n*5);
console.log(multipleByFive);
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)

console.log(odds)

var productPrice = [
    {
        name: 'compass',
        price: 35,
    },
    {
        name: 'ruler',
        price: 52,
    },
    {
        name: 'bag',
        price: 5000,
    },
    {
        name: 'printer',
        price: 5000,
    }
]
const findFiveThousandTaka = productPrice.find(productPrice => productPrice.price ==5000);
console.log(findFiveThousandTaka);
*/
const list = [12, 'shuvro', 'baset', 'pushpo', 'ratri']
const three = list[2];
console.log(three);