"use strict";


function isHometown(town){
    
    if (town === 'San Francisco') {
        return true
    }
    else {
        return false
    }
}
console.log(isHometown('San'))
console.log(isHometown('San Francisco'))

// 2. getFullName
function getFullName(firstName, lastName) {

    console.log(`${firstName} ${lastName}`);

}

getFullName('Andrew', 'Blum')



// 3. calculateTotal

function calculateTotal(basePrice, tax=0.05, state){

    let subTotal = basePrice * ( 1 + tax);
    let fee = 0;

    if (state === 'CA') {
        fee = 0.03 * subTotal;
    }
    else if (state === 'PA') {
        fee = 2
    }
    else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        }
        else {
            fee = 3;
        }
    }
    return (subTotal + fee);
}

console.log(calculateTotal(1000, 0.05, 'CA'))
console.log(calculateTotal(1000, 0.05, 'PA'))
console.log(calculateTotal(1000, 0.05, 'MA'))
console.log(calculateTotal(10, 0.05, 'MA'))