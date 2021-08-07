/**
 একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে।
 সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
 এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। 
 এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  
 */

function bestFriend(array) {
    var bigString = '';
    for(const b of array) {
        if(b.length > bigString.length){
            bigString = b;
        }
    }
    return bigString;
}
var arr = ['baset', 'shuvro', 'roky', 'alsdkjfl', 'asdff', 'sakib al hasan'];
console.log(bestFriend(arr));

/* shortest way. 
var arr = ['baset', 'shuvro', 'roky', 'alsdkjfl', 'asdff', 'sakib al hasan']
var longest = arr.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
console.log(longest);
*/