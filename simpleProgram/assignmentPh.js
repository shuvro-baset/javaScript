// ---- Problem-1 -----
/*
// declare function name seerToMon to convert seer to mon
function seerToMon(seer){
    // checking parameter type and valid number. string and negative number is not allowed.
    if(typeof seer == 'string' || seer<=0){
        console.log("Please give a positive number. blank or string or negative value is not allowed");
    }
    else{
        // converting seer to mon
        const mon = seer /40 ; 
        // return result
        return mon;
    } 
}
// calling function seerTo()
seerToMon(10);

*/

// ------ Problem-2 ------- 
/*

// ---- Problem-3 ------- 

function deliveryCost(){

}
function totalSales(shirtsQuantity, pantsQuantity, shoesQuantity) {
    const singleShirtPrice = 100;
    const singlePantPrice = 200;
    const singleShoesPrice = 500;
    const shirtsTotalPrice = singleShirtPrice * shirtsQuantity;
    const pantsTotalPrice = singlePantPrice * pantsQuantity;
    const shirtTotalPrice = singleShoesPrice * shoesQuantity;
    const totalPrice = shirtsTotalPrice+ pantsTotalPrice+shirtTotalPrice ;
    console.log(totalPrice);
    return totalPrice;

}
totalSales(3,2,1);

*/

// ---- Problem-3 ------- 
/*
function deliveryCost(shirtQuantity){
    const deliveryCostForFirst100Shirt = 100;
    const deliveryCostForSecond200Shirt = 80;
    const deliveryCostForMoreThan200Shirt = 50;
    let totalDeliveryCost = 0;

    if(shirtQuantity <=100){
        totalDeliveryCost = deliveryCostForFirst100Shirt* shirtQuantity;
    }
    else if(shirtQuantity <=200){
        const shirtQuantityMoreThan100 = shirtQuantity - 100;
        totalDeliveryCost = (100*100) + (shirtQuantityMoreThan100*deliveryCostForSecond200Shirt);
    }
    else{
        const shirtQuantityMoreThan200 =shirtQuantity - 200;
        totalDeliveryCost = (100*100) + (100*80) + (shirtQuantityMoreThan200*deliveryCostForMoreThan200Shirt);  
    }
    console.log(totalDeliveryCost);
    return totalDeliveryCost;
}

deliveryCost(220);
*/

// ---- Problem-4 -----
/*
function perfectFriend(friendsName) {
    for (let i =0; i<friendsName.length; i++) {
        if(friendsName[i].length == 5){
            return friendsName[i];
        }
        else if(i == friendsName.length-1){
            return `There is no perfectFriend`;
        }
    }
    // console.log(firstFriendNameLength);
}
console.log(perfectFriend(['shuvro', 'base', 'atiq', 'ibrahim', 'pushpo', 'ratree']));

*/