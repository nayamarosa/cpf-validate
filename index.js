function cpfValidator (cpfnumber) {

  if (checkLength(cpfnumber) === false) {

    return false;
  
  } else if (checkIfSameNumber(cpfnumber) === false) {

    return false;
  
  } else {

    return checkCodesValidate(cpfnumber);
  
  }

}

function checkLength (cpfnumber) {
  
  return cpfnumber.toString().length === 11;
  
}

function checkIfSameNumber (cpfnumber) {
  
  const cpf = cpfnumber.substring(0, 9).split('');
  const checkRepeatNumber = cpf.every(num => num === cpf[0]);
  if (checkRepeatNumber === true) {

    return false;
  
  } else {

    return true;
  
  }

}

function firstCodeValidate (cpfnumber) {
  
  const nineDigits = cpfnumber.substring(0, 9).split('');
  const transformToNumbers = nineDigits.map(Number);
  
  let arrayToSum = [];
  
  for (num in transformToNumbers) {
    
    let multiplyNumbers = (transformToNumbers[num]) * (10 - num);
    arrayToSum.push(multiplyNumbers);
    
  }
  
  let allDigitsSum = arrayToSum.reduce(function (a, b) {
    
    return a + b;
    
  });
  
  let module = (allDigitsSum * 10) % 11;
  if (module === 10) {
    
    return 0;
    
  } else {
    
    return module;
    
  }
  
}

function secondCodeValidate (cpfnumber) {
  
  const tenDigits = cpfnumber.substring(0, 10).split('');
  const transformToNumbers = tenDigits.map(Number);
  
  let arrayToSum = [];
  
  for (num in transformToNumbers) {
    
    let multiplyNumbers = (transformToNumbers[num]) * (11 - num);
    arrayToSum.push(multiplyNumbers);
    
  }
  
  let allDigitsSum = arrayToSum.reduce(function (a, b) {
    
    return a + b;
    
  });
  
  let module = (allDigitsSum * 10) % 11;
  return module;
  
}

function checkCodesValidate (cpfnumber) {
  
  let firstNumber = firstCodeValidate(cpfnumber).toString();
  let secondNumber = secondCodeValidate(cpfnumber).toString();
  if (firstNumber === cpfnumber.substring(9, 10) || secondNumber === cpfnumber.substring(10, 11)) {
    
    return true;
    
  } else {
    
    return false;
    
  }
  
}

cpfValidator('38089124801');

module.exports.cpfValidator = cpfValidator;

module.exports.checkLength = checkLength;
module.exports.checkIfSameNumber = checkIfSameNumber;
module.exports.checkCodesValidate = checkCodesValidate;