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