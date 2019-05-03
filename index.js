function cpfValidator(cpfnumber) {
  const hasValidLength = cpfnumber.toString().length === 11;
  if (!hasValidLength || isSameNumber(cpfnumber) ) {
    return false;
  } else {
    return checkCodesValidate(cpfnumber);
  }
}

function isSameNumber(cpfnumber) {
  const cpf = cpfnumber.substring(0, 9).split('');
  const checkRepeatNumber = cpf.every(num => num === cpf[0]);

  return checkRepeatNumber;
}

function calculateDigitsSum(cpfnumber, digit) {
  const getDigitsToCalculate = cpfnumber.substring(0, digit - 1).split('');
  const transformToNumbers = getDigitsToCalculate.map(Number);
  const arrayToSum = transformToNumbers.map((num, index) => num * (digit - index));    
  const allDigitsSum = arrayToSum.reduce((a, b) => a + b);

  return (allDigitsSum * 10) % 11;
}

function checkCodesValidate(cpfnumber) {
  const firstNumberModuleCondition = calculateDigitsSum(cpfnumber, 10);
  const firstNumber = firstNumberModuleCondition === 10 ? 0 : firstNumberModuleCondition.toString();
  const secondNumber = calculateDigitsSum(cpfnumber, 11).toString();

  const isFirstNumberTheSame = firstNumber === cpfnumber.substring(9, 10);
  const isSecondNumberTheSame = secondNumber === cpfnumber.substring(10, 11);

  return isFirstNumberTheSame || isSecondNumberTheSame;
}

cpfValidator('38089124801')
module.exports.cpfValidator = cpfValidator;