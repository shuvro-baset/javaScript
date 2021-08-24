// write a code shortly using object and list

const info = {name: 'shuvro', age: 27, dreams: 'software engineer', phone: '016****', email: 'shuvro.aps.75@gmail.com'}
/*  now i will declare some variable to access all the property from info object.
    It should be property name so that it can search own value from the object.
    If I use var name that was not in the object property than it will give undefined behavior. 
*/
const {name, age, phone, dreams, email, test} = info // here test is not present in info object so it returns undefined behavior.
console.log(name, age, phone, test)

// array destructuring.
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

/*  optional chaining. sometimes we can call a wrong property by mistake actually that was not in the object.
    in that time we should use ? mark. like it will ask that if the property is present then go forward if not then stop here and give undefined.  
    note: though we should use try cache. 
    example: console.log(phone_num?.a?.b) 
*/