// Dada la siguiente problemática: ¿puede un número X formarse usando la suma de 2 elementos de un array?
// Ejemplo 1
// Input: nums = [1,4,3,9], requiredSum = 8 Output: False
// Ejemplo 2
// Input: nums = [1,2,4,4], requiredSum = 8 Output: True
// Desarrolle (en pseudo código o su lenguaje de preferencia):
// 1. Un algoritmo que resuelva el problema asumiendo que la máquina en donde va a correrse el programa tiene recursos infinitos, que el tiempo de ejecución no importa y que lo más importante es realizar el desarrollo en el menor tiempo posible.
// 2. Un algoritmo que resuelva el problema asumiendo que los recursos son un bien preciado, que el tiempo de ejecución si importa y que el tiempo de desarrollo no es importante.
// Ante cualquier duda o ambigüedad en el enunciado, es libre de hacer todas las suposiciones necesarias, siempre y cuando las especifique.

const arr1 = [1, 4, 3, 9];
const arr2 = [1, 4, 4, 9];
const req = 8;

// SOLUCION 1: MENOS PERFORMANTE
const arraySum = (arr: number[], requiredSum: number) => {
  let isValid = false; //isValid funciona como flag, y sera la condicion de corte
  let i = 0;

  while (i < arr.length && isValid === false) {
    if (i !== arr.length - 1) {
      let j = i + 1;
      while (j < arr.length && isValid === false) {
        const sum = arr[i] + arr[j];
        if (sum === requiredSum) {
          isValid = true; // En caso que la suma de 2 elementos del array sea igual a requiredSum, modificamos isValid a true para salir de los bucles
        }
        j++;
      }
    }
    i++;
  }
  return isValid;
};

console.log("result: ", arraySum(arr1, req));
console.log("result: ", arraySum(arr2, req));

//SOLUCION 2: MAS PERFORMANTE
// En esta solucion utilizamos el método some para iterar sobre el array 
// y comprobar si se cumple la condición para al menos un par de números. 
// Dentro de some, utilizamos find para buscar un segundo número que, sumado 
// al primer número, sea igual a requiredSum

const arraySum2 = (arr: number[], requiredSum: number) => {
  return arr.some((num1, index) => {
    return arr.slice(index + 1).find((num2) => num1 + num2 === requiredSum);
  });
};

console.log("result: ", arraySum2(arr1, req));
console.log("result: ", arraySum2(arr2, req));
