const myObj = {
    name: 'shuvro',
    number : 1673841675,
    obj2: {
        prop1: "property",
        prop2: "property"
    },
    objArray: [1,5,7,],
    objFunction: function(name){
        return name + " " + this.number
    }
}
const temString = `${myObj.obj2.prop1} ${myObj.objArray[1]} ${myObj.number}}`;
// console.log(temString);

const zero = () => 89;
// console.log(zero());

const single = num1 => num1/7;
// console.log(single(70));

const double = (num1, num2) => (num1+num2)/2;
// console.log(double(2,5));

const double2 = (num1, num2) => {
    const newNum1 = num1 + 7;
    const newNum2 = num2 + 7;
    return (newNum1 + newNum2)
}
// console.log(double2(2,5));

const array2 = [12,25,24,28,16,14,84].map(x => x/7);
// console.log(array2);

