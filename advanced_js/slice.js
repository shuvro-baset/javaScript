const num = [1,2,5,46,78,54,5]
const part = num.slice(2,5)
console.log(part)

const remove = num.splice(2,4)
console.log(remove)
console.log(num)

const remAdd = num.splice(2,4,100,75,140)
console.log(remAdd)
console.log(num)

const together = num.join('-')
console.log(together)