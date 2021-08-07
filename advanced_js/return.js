// calling a function inside the function
function greet(msg) {
    function greetings (name){
        return msg + ", " + name
    }
    return greetings
}

var gm = greet("good morning") // it save the message 
var gn = greet("good night")
var hello = greet("hello")

var msg = gm("shuvro") // passing the msg and calling greetings method with shuvro arguments.
console.log(msg)
console.log(gn("baset"))
console.log(hello("python developer"))


function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }

}
var base10 = base(10)
console.log(base10(2)) // it will return 2 to the power 10

var base5 = base(5)
console.log(base5(2))// it will return 2 to the power 5
console.log(base5(3))// it will return 3 to the power 5
console.log(base5(5))// it will return 5 to the power 5