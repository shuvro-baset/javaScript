var a = [12,54,66,33,15,12,45,65]
var max = a[0];
for(var i =0; i < a.length; i++){
    var element = a[i];
    if(element>max){
        max = element;
    }
}
console.log(max);