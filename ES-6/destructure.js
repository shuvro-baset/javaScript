// write a code shortly using object and list

const info = {name: 'shuvro', age: 27, dreams: 'software engineer', phone: '016****', email: 'shuvro.aps.75@gmail.com'}
// now i will declare some variable to access all the property from info object
const {name, age, phone, dreams, email} = info

console.log(name, age, phone)

const list = [12, 'shuvro', 'baset', 'pushpo', 'ratri']
// if it is a list so I should use [] 3rd braces. 
const [num, fName, lName, gName, nName] = list
console.log(num, fName, lName, gName)

// in this case i can define rest of the thing in to a single
// const [num, ...names] =list
// console.log(num, names)


// complex object. when using nested object we can access the attributes
const complexObj = {
    name: 'shuvro', 
    info: {
        address: 'lalbag',
        phone_num : '01524',
    }
}
const {phone_num} = complexObj.info
console.log(phone_num)