// ---- Problem-1 -----
/*
// declare function name seerToMon to convert seer to mon
function seerToMon(seer){
    // checking parameter type and valid number. string and negative number is not allowed.
    if(typeof seer != 'number' || seer<=0){
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
// declare a function called totalSales
function totalSales(shirtQuantity, pantQuantity, shoesQuantity) {
    // type validation
    if(typeof shirtQuantity != 'number' || typeof pantQuantity != 'number'|| typeof shoesQuantity != 'number') {
        console.log("string value not allowed");
    }
    // negative value validation
    else if(shirtQuantity< 0 || pantQuantity< 0 || shoesQuantity < 0){
        console.log("positive value required");
    }
    // float value validation
    else if(shirtQuantity% 1 != 0 || pantQuantity% 1 != 0 || shoesQuantity % 1 != 0){
        console.log("product quantity can not be float value");
    }
    
    else{
        const singleShirtPrice = 100;
        const singlePantPrice = 200;
        const singleShoesPrice = 500;
        // calculate total sales price
        const totalPrice = shirtQuantity*singleShirtPrice + pantQuantity*singlePantPrice + shoesQuantity*singleShoesPrice ;
        // return totalPrice
        return totalPrice;
    }
}
// calling function
totalSales(2,2,1);

*/

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
        const errorMessage = "shirt quantity can't be string or negative or float";
        return errorMessage;
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
deliveryCost(-201);


// ---- Problem-4 -----

// declare a function name perfectFriend
function perfectFriend(friendsName) {
    // validation check.
    if(Array.isArray(friendsName) == false){
        const errorMessage = 'Please insert a array type data';
        return errorMessage;
    }
    // for loop for finding friend that contains 5 character
    for (let i =0; i<friendsName.length; i++) {
        // checking 5 character friend name
        if(friendsName[i].length == 5){
            return friendsName[i];
        }
        // if 5 character friend name is not found
        else if(i == friendsName.length-1){
            const result = "There is no perfectFriend";
            return result;
        }
    }
}
// calling perfectFriend function 
perfectFriend();

