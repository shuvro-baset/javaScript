// basic callback function, when we call a function as an arguments its called callback.

function explainCallback(name, age, task){
    console.log('Hello: ', name);
    console.log('age: ', age);
    task();
}

function washHand(){
    console.log('Wash your hand please!')
}

function takeShower(){
    console.log('Take shower')
}

function scrollFacebook(){
    console.log('Scroll facebook')
}

// when we use callback function we just need to call function name without parentheses
explainCallback('kamla', 21, washHand)
explainCallback('zahed', 22, takeShower)
explainCallback('rabby', 22, scrollFacebook)