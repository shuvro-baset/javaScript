function evenIfy(num){
    if (num%2==0){
        var result =  num
    }
    else{
        var result =  num *2
    }
    return result
}

function evenAll(arr){
    var ever_array = [];
    for (var i =0; i<arr.length; i++){
        var num = arr[i];
        var r = evenIfy(num);
        ever_array.push(r);

    }
    return ever_array
}

var ar = [12,10,15,23,50,75,41,21,05,45]
var myfunc = evenAll(ar);
console.log(myfunc);