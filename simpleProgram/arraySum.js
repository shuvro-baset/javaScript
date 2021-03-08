var a = [12, 54, 66, 33, 15, 12, 45, 65]


function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var s = arr[i];
        sum = sum + s

    }
    return sum;
}
result = arraySum(a);
console.log(result);