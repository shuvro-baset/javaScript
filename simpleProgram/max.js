var a = 123;
var b = 254;
var c = 315;

if (a>b){
    if(a>c){
        console.log("a is biggest value")
    }
}
else{
    if(b>c){
        console.log("b is biggest value")
    }
    else{
        console.log("c is biggest value")
    }
}

// another way to find max value
var max = Math.max(a,b,c);
console.log("max value is : ", max);