const normalPerson = {
    firstName: 'shuvro', 
    lastName: 'baset',
    salary: 15000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - amount -tips - tax;
        return this.salary;
    }
}

normalPerson.chargeBill(100);
console.log(normalPerson.salary)

const zeroPerson = {
    firstName: 'zero', 
    lastName: 'person',
    salary: 5000,
}


const heroPerson = {
    firstName: 'hero', 
    lastName: 'person',
    salary: 25000,
}

// i will bind chargeBill function to heroPerson
const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(1000);
console.log(heroPerson.salary)
console.log(normalPerson.salary)

// call function 
normalPerson.chargeBill.call(heroPerson, 900,100,10);
console.log(heroPerson.salary)
normalPerson.chargeBill.call(zeroPerson, 2000, 200, 20);
console.log(zeroPerson.salary)


// apply 
normalPerson.chargeBill.apply(heroPerson, [1000, 200, 20]);
console.log(heroPerson.salary);
normalPerson.chargeBill.apply(zeroPerson, [500, 501, 501]);
console.log(zeroPerson.salary);