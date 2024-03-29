/*
এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। 
অর্থাৎ শূন্য এর চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। 
তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

*/
function positiveNumber(arr) {
    var newArray = [];
    for(const a of arr) {
        if(a>=0){
            newArray.push(a);
        }
        else if(a<0){
            break;
        }
    }
    return newArray;
}
var array = [1,5,4,6,8,5,98,-1,4,6,5,5,5];
console.log(positiveNumber(array));