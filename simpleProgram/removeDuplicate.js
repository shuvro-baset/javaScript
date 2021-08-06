// remove duplicate value from an array element

var arr = [1,2,5,4,6,4,8,2,4,5,4,5,2,8,9,7,10,15];
var arr2 = ['baset', 'shuvro', 'shuvro', 'pushpo', 'pushpo', 'apon', 'dipto'];

function removeDuplicates(arr) {
    var newArray = [];
    for (const a of arr) {
        if(newArray.indexOf(a) == -1) {
            newArray.push(a);
        }
    }
    return newArray;
}
console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr2));
