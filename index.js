// function cpfValidator(cpfnumber){
    
//     function differentNumbers() {
//         // ??
//     }
    
//     function firstCodeValidate() {
//         //somar [0]*10 + [1]*9 + [2]*8 + [3]*7 + [4]*6 + [5]*5 + [6]*4 + [7]*3 + [8]*2
//         //multiplicar resultado por 10
//         //dividir por 11 e pegar o módulo
//         //módulo = primeiro digito
//     }
    
//     function secondCodeValidate() {
//         //somar [0]*11 + [1]*10 + [2]*9 + [3]*8 + [4]*7 + [5]*6 + [6]*5 + [7]*4 + [8]*3 + [9]*2
//         //multiplicar resultado por 10
//         //dividir por 11 e pegar o módulo
//         //módulo = primeiro digito
//     }
    
    
// }

// const transformToNumbers = (cpfnumber) => parseInt(cpfnumber, 10);
    
function checkLength(cpfnumber){
    if(cpfnumber.toString().length === 11){
        return true;
    } else {
        return false;
    }
}

// transformToNumbers("1234543212");
checkLength(12345574663);

// module.exports = transformToNumbers;
module.exports.checkLength = checkLength;