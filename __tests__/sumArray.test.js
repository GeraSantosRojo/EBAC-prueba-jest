//Realiza las siguientes especificaciones en tus tests:
//sumArray
const {sumArray, countWords, findMax, isDivisible} = require('../js/main');

describe('Array Test', () => {
    // Prueba con un arreglo de números positivos.
    it('should sum an array of numbers', () => {
        expect(sumArray([1,2,3,4])).toBe(10);
    });
    //Prueba con un arreglo de números negativos.
    it('should sum an array of negative numbers', () => {
        expect(sumArray([-1,-2,-3])).toBe(-6);
    });
    //Prueba con un arreglo vacío (debe retornar 0).
    it('should be a test of empty array', () => {
        expect(sumArray([])).toBe(0);
    });
    //Prueba con un arreglo que incluya 0.
    it('should work with numbers and zeros included', () => {
        expect(sumArray([0,1,2,3])).toBe(6);
    });
});

//countWords
describe('Count Test', () => {
    //Prueba con una cadena de texto normal.
    it('should return a normal string', () =>{
        expect(countWords('Hola mundo')).toBe(2);
    });
    //Prueba con una cadena con espacios al inicio y final.
    it('should return a count of normal string ignoring spaces', () =>{
        expect(countWords(' Hola mundo ')).toBe(2);
    });
    //Prueba con una cadena vacía (debe retornar 0).
    it('should return 0 for an empty string', () =>{
        expect(countWords('')).toBe(0);
    });
    //Prueba con una cadena con espacios consecutivos entre palabras.
    it('should return the count of word even with multiple spaces between words', () =>{
        expect(countWords('Hola    Mundo    esto   es   un   test')).toBe(6);
    });
});

//findMax
describe('FindMax Test', () => {
    //Prueba con un arreglo de números positivos.
    it('should return the max in positive numbers', () => {
        expect(findMax([1, 5, 3, 9, 2])).toBe(9);
    });
    //Prueba con un arreglo de números negativos.
    it('should return the max in negative numbers', () => {
        expect(findMax([-1, -3, -5, -2])).toBe(-1);
    });
    //Prueba con un arreglo vacío (debe retornar null).
    it('should return null for an empty array', () => {
        expect(findMax([])).toBeNull();
    });
    //Prueba con un arreglo donde todos los números son iguales.
    it('should return the repeated value when all numbers are the same', () => {
        expect(findMax([3, 3, 3])).toBe(3);
    });
});

//isDivisible
describe('isDivisible Test', () => {
    //Prueba con números divisibles.
    it('should return true if the numbers are divisible', () => {
        expect(isDivisible(10, 2)).toBe(true);
    });
    //Prueba con números no divisibles.
    it('should return false for non-divisible numbers', () => {
        expect(isDivisible(10, 3)).toBe(false);
    });
    //Prueba con el divisor siendo 0 (debe retornar un mensaje de error)
    it('should return error message when divisor is zero', () => {
        expect(isDivisible(5, 0)).toBe('No se puede dividir entre cero');
    });
    //Prueba con números negativos como entrada.
    it('should work with negative numbers', () => {
        expect(isDivisible(-10, -2)).toBe(true);
    });
});











