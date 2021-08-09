// ---- Problem-1 -----

// declare function name seerToMon to convert seer to mon
function seerToMon(seer){
    // checking parameter type and valid number. string and negative number is not allowed.
    if(typeof seer != 'number' || seer<=0){
        // return error Message
        return "Please give a positive number. blank or string or negative value is not allowed";
    }
    else{
        // converting seer to mon
        const mon = seer /40 ; 
        // return result
        return mon;
    } 
}
// calling function seerTo()
console.log(seerToMon(50));
console.log(seerToMon(-10));
console.log(seerToMon(''));



// ------ Problem-2 ------- 

// declare a function called totalSales
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // type validation
    if(typeof shirtQuantity != 'number' || typeof pantQuantity != 'number'|| typeof shoesQuantity != 'number') {
        // return error Message
        return "string value not allowed";
    }
    // negative value validation
    else if(shirtQuantity< 0 || pantQuantity< 0 || shoesQuantity < 0){
        // return error Message
        return "positive value required";
    }
    // float value validation
    else if(shirtQuantity% 1 != 0 || pantQuantity% 1 != 0 || shoesQuantity % 1 != 0){
        // return error Message
        return "product quantity can not be float value";
    }
    else{
        // define a variable called singleShirtPrice a and set the value 100 
        const singleShirtPrice = 100;
        // define a variable called singlePantPrice a and set the value 200 
        const singlePantPrice = 200;
        // define a variable called ShoesPrice a and set the value 500 
        const ShoesPrice = 500;
        // calculate total sales price
        const totalPrice = shirtQuantity*singleShirtPrice + pantQuantity*singlePantPrice + shoesQuantity*ShoesPrice ;
        // return totalPrice
        return totalPrice;
    }
}
// calling function
console.log(totalSales(2,2,1));
console.log(totalSales(2,'2',1));
console.log(totalSales(2,2,-1));



// ---- Problem-3 ------- 


// declare a function name deliveryCost
function deliveryCost(shirtQuantity){
    // define a variable called deliveryCostForFirst100Shirt and set the value 100
    const deliveryCostForFirst100Shirt = 100;
    // define a variable called deliveryCostForSecond100Shirt and set the value 80
    const deliveryCostForSecond100Shirt = 80;
    // define a variable called deliveryCostForMoreThan200Shirt and set the value 50
    const deliveryCostForMoreThan200Shirt = 50;
    // define a variable called totalDeliveryCost and set the value 0
    let totalDeliveryCost = 0;
    // validation check
    if(typeof shirtQuantity != 'number' || shirtQuantity<=0 || shirtQuantity% 1 != 0){ 
        // return error message.
        return "shirt quantity can't be string or negative or float";
    }
    // if shirtQuantity is more than 0 less than 101
    else if(shirtQuantity <=100){
        totalDeliveryCost = deliveryCostForFirst100Shirt* shirtQuantity;
        // return total delivery Cost
        return totalDeliveryCost;
    }
    // if shirtQuantity is more than 100 less than 201
    else if(shirtQuantity <=200){
        const shirtQuantityMoreThan100 = shirtQuantity - 100;
        totalDeliveryCost = (deliveryCostForFirst100Shirt*100) + (shirtQuantityMoreThan100*deliveryCostForSecond100Shirt);
        // return total delivery Cost
        return totalDeliveryCost;
    }
    // if shirtQuantity is more than 200
    else{
        const shirtQuantityMoreThan200 =shirtQuantity - 200;
        totalDeliveryCost = (deliveryCostForFirst100Shirt*100) + (deliveryCostForSecond100Shirt*100) + (shirtQuantityMoreThan200*deliveryCostForMoreThan200Shirt);  
        // return total delivery Cost
        return totalDeliveryCost;
    }
}
//calling deliveryCost function
console.log(deliveryCost(201));
console.log(deliveryCost('201'));
console.log(deliveryCost(-105));



// ---- Problem-4 -----

// declare a function name perfectFriend
function perfectFriend(friendsName) {
    // validation check.
    if(Array.isArray(friendsName) == false){
        // return error message.
        return 'Please insert a array type data';
    }
    // for loop for finding friend that contains 5 character
    for (let i =0; i<friendsName.length; i++) {
        // checking 5 character friend name
        if(friendsName[i].length == 5){
            // return perfect friend name
            return friendsName[i];
        }
        // if 5 character friend name is not found
        else if(i == friendsName.length-1){
            // return result
            return "There is no perfectFriend";
        }
    }
}
// calling perfectFriend function 
console.log(perfectFriend(['shuvro', 'baset', 'apon', 'lionel', 'messi', 'eniesta' ]));
console.log(perfectFriend(['shuvro',  'lionel', 'eniesta' ]));
console.log(perfectFriend(10));



