// javaScript class is same as python class just have some syntax difference

class Student{
    // making constructor function. class can call constructor method herself.
    constructor(Sid, sName){
        this.id = Sid;
        this.name = sName;
    }
}

// creating new object of Student class
const st1 = new Student(12, 'shuvro');
const st2 = new Student(23, 'baset');

console.log(st1, st2, st1.name);