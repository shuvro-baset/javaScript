class Parent{
    constructor(name){
        this.name = 'fatherName';
    }
}

// this is our child class which inherit parent class by extends
class Child extends Parent{
    constructor(chName){
        // we need to call super method for calling the Parent class property
        super();
        this.chName = chName;
    }

    // define a new function under the class name. No need to call function, just give the function name
    fullName(){
        return this.chName + " " +  this.name;
    }
}

const child1 = new Child('childName')
console.log(child1)
console.log(child1.fullName())