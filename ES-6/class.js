// javaScript class is same as python class just have some syntax difference

class Student{
    constructor(Sid, sName){
        this.id = Sid;
        this.name = sName;
    }
}

const st1 = new Student(12, 'shuvro');
const st2 = new Student(23, 'baset');

console.log(st1, st2, st1.name);