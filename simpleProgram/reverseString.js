var string = "I am shuvro baset, Python programmer. I love coding."

function reverseString(string){
    var reverse = "";
    for(var i=0; i<string.length; i++){
        var char = string[i];
        reverse = char + reverse;
    }
    return reverse
}
result = reverseString(string)
console.log(result)

// same way just using for of method.
function reverseString2(string){
    var reverse2 = '';
    for(const key in string){
        var char = string[key]; ;
        reverse2 = char + reverse2;
    }
    return reverse2
}
console.log(reverseString2(string))