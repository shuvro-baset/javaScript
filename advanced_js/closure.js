// first look at closure 

var b = 10;
function a(){
    // if any global value use another function scope then it's called closure
    //console.log(b)
    var x = 5 
    return function(){
        // another closure
        console.log(x)
    }
}
var abc = a()
console.log(abc)