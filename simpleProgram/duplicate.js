var a = [12, 54, 66, 33, 15, 12, 45, 65, 54, 15]

var newArray = [];
for (var i = 0; i< a.length; i++){
    var element = a[i];
    var index = newArray.indexOf(element);
    if (index==-1){
        newArray.push(element)
    }
}
console.log(newArray)