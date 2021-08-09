// ---- Problem-1 -----

function seerToMon(seer){
    if(typeof seer != 'number' || seer<=0){
        return "Please give a positive number. blank or string or negative value is not allowed";
    }
    else{
        const mon = seer /40 ; 
        return mon;
    } 
}
console.log(seerToMon(50));
console.log(seerToMon(-10));
console.log(seerToMon(''));



// ------ Problem-2 ------- 

function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // type validation
    if(typeof shirtQuantity != 'number' || typeof pantQuantity != 'number'|| typeof shoesQuantity != 'number') {
        return "string value not allowed";
    }
    else if(shirtQuantity< 0 || pantQuantity< 0 || shoesQuantity < 0){
        return "positive value required";
    }
    else if(shirtQuantity% 1 != 0 || pantQuantity% 1 != 0 || shoesQuantity % 1 != 0){
        return "product quantity can not be float value";
    }
    else{
        const singleShirtPrice = 100;
        const singlePantPrice = 200;
        const ShoesPrice = 500;
        const totalPrice = shirtQuantity*singleShirtPrice + pantQuantity*singlePantPrice + shoesQuantity*ShoesPrice ;
        return totalPrice;
    }
}
console.log(totalSales(2,2,1));
console.log(totalSales(2,'2',1));
console.log(totalSales(2,2,-1));



// ---- Problem-3 ------- 


function deliveryCost(shirtQuantity){
    const deliveryCostForFirst100Shirt = 100;
    const deliveryCostForSecond100Shirt = 80;
    const deliveryCostForMoreThan200Shirt = 50;
    let totalDeliveryCost = 0;
    if(typeof shirtQuantity != 'number' || shirtQuantity<=0 || shirtQuantity% 1 != 0){ 
        return "shirt quantity can't be string or negative or float";
    }
    else if(shirtQuantity <=100){
        totalDeliveryCost = deliveryCostForFirst100Shirt* shirtQuantity;
        return totalDeliveryCost;
    }
    else if(shirtQuantity <=200){
        const shirtQuantityMoreThan100 = shirtQuantity - 100;
        totalDeliveryCost = (deliveryCostForFirst100Shirt*100) + (shirtQuantityMoreThan100*deliveryCostForSecond100Shirt);
        return totalDeliveryCost;
    }
    else{
        const shirtQuantityMoreThan200 =shirtQuantity - 200;
        totalDeliveryCost = (deliveryCostForFirst100Shirt*100) + (deliveryCostForSecond100Shirt*100) + (shirtQuantityMoreThan200*deliveryCostForMoreThan200Shirt);  
        return totalDeliveryCost;
    }
}
console.log(deliveryCost(201));
console.log(deliveryCost('201'));
console.log(deliveryCost(-105));



// ---- Problem-4 -----

function perfectFriend(friendsName) {
    if(Array.isArray(friendsName) == false){
        return 'Please insert a array type data';
    }
    for (let i =0; i<friendsName.length; i++) {
        if(friendsName[i].length == 5){
            return friendsName[i];
        }
        else if(i == friendsName.length-1){
            return "There is no perfectFriend";
        }
    }
}
console.log(perfectFriend(['shuvro', 'baset', 'apon', 'lionel', 'messi', 'eniesta' ]));
console.log(perfectFriend(['shuvro',  'lionel', 'eniesta' ]));
console.log(perfectFriend(10));



