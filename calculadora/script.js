'use strict';

/* 
Uma função completa que faz uma calculadora simples, recebendo dois números e um e retornando o resultado da operação.
*/

function calculadora(num1, operator, num2) {
    if (num1 === undefined || num2 === undefined ||
        operator === undefined) {
            return 'Valores inválidos'
    };
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Valores inválidos';
    }
    if (Number.isNaN(num1) || Number.isNaN(num2) ||
        typeof operator !== 'string') {
            return 'Valores inválidos';
    }
    if (operator === '+') {
        return num1 + num2;
    };
    if (operator === '-') {
        return num1 - num2;
    };
    if (operator === '*') {
        return num1 * num2;
    };
    if (operator === '/') {
        return num1 / num2;
    }
    if (operator === '%') {
        return num1 % num2;
    }
    if (operator === '**') {
        return num1 ** num2;
    }
    if (operator === '//') {
        return Math.floor(num1 / num2)
    };
    
};

console.log(calculadora(5, '+', 3)); // Output: 8