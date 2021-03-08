var string = "I am shuvro baset, Python programmer. I love coding."

var count =0;
for (var i =0; i<string.length; i++){
    var char = string[i];
    if (char==" " && string[i-1]!=" "){
        count++;
    }
}
count = count + 1;
console.log("Total word number is: ", count);