 // using object litetal
const student = {name: "sakib", job: "cricketer"}
// constructor
const person = new Object();
 
// create method. must refer an object or null. one kind of inheritance
// const human = Object.create(null); // at least we should provide null to create this type of object.
const human = Object.create(student);
console.log(human.job); // this will return a job property from student object

// class object like as python . yee :) 
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);


const student2 = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    // set function as a object property. using this method to access the objects another property
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
}

student2.takeExam();
const remaining1 = student2.treatDey(900, 100);
const remaining2 = student2.treatDey(500, 50);
console.log(remaining2);

// Keys, values, entities, delete, seal, freeze
const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);
// get all values 
const values = Object.values(bottle);
// console.log(values);
const pairs = Object.entries(bottle); // it gives a two dimensional array with all keys and values
// console.log(pairs);
Object.seal(bottle); // if I seal the object then it can't be delete/add any property but can change property value. 
// Object.freeze(bottle); // no change to properties. totally freeze.
bottle.price = 100;
bottle.height = 16;
delete bottle.isCleaned;
console.log(bottle);

// Loop through an object using for in, for of, object entries

const bottle1 = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* 
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/


for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}


// Compare objects, referential integrity

const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first; // first object refer to third . so it will be equal

if (first === third) {
    // console.log('objects are equal');
}
else {
    // console.log('Objects are different');
}
// note : if we compare two objects with === then, two different object will not be equal. though there values are same.

const first2 = { a: 1, b: 2, c: 2 };
const second2 = { b: 2, a: 1 };
// comparing two object with there values - for this we can stringify the objects then compare them. but its not a good solution
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    // console.log('objects are equal')
}
// finally here is the best solution to compare two objects. accessing there values and comparing them.
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first2, second2);
console.log(isEqual);
