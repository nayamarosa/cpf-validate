function checkLength(cpfnumber){
    return cpfnumber.toString().length === 11;
}

// function cpfValidator(cpfnumber){

//     function differentNumbers() {
//         // ??
//     }

function firstCodeValidate(cpfnumber) {
    const nineDigits = cpfnumber.substring(0,9).split('');
    const transformToNumbers = nineDigits.map(Number);
    
    let arrayToSum = [];
    
    for(num in transformToNumbers){
        let multiplyNumbers = (transformToNumbers[num]) * (10 - num);
        arrayToSum.push(multiplyNumbers);
    }
    
    let allDigitsSum = arrayToSum.reduce(function(a, b) {
        return a + b;
    });
    
    let module = (allDigitsSum * 10) % 11;
    if(module === 10){
        return 0;
    } else {
        return module;
    }
}

function secondCodeValidate(cpfnumber) {
    const tenDigits = cpfnumber.substring(0,10).split('');
    const transformToNumbers = tenDigits.map(Number);
    
    let arrayToSum = [];
    
    for(num in transformToNumbers){
        let multiplyNumbers = (transformToNumbers[num]) * (11 - num);
        arrayToSum.push(multiplyNumbers);
    }
    
    let allDigitsSum = arrayToSum.reduce(function(a, b) {
        return a + b;
    });
    
    let module = (allDigitsSum * 10) % 11;
    return module;
}

function checkCodesValidate(cpfnumber){
    let firstNumber = firstCodeValidate(cpfnumber).toString();
    let secondNumber = secondCodeValidate(cpfnumber).toString();
    if(firstNumber === cpfnumber.substring(9,10) || secondNumber === cpfnumber.substring(10,11)){
        return true;
    } else {
        return false
    }
}

checkLength("73516511834")
checkCodesValidate("73516511834")

module.exports.checkCodesValidate = checkCodesValidate;
module.exports.checkLength = checkLength;