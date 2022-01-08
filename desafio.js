/***
 *
 * Desafio:
 * Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 
 * que divididos por N dão resto igual a 2.
 *
 * Entrada:
 * A entrada contém um valor inteiro N (N < 10000).
 * 
 * Saída:
 * Imprima todos valores que quando divididos por N dão resto = 2, um por linha.
 *
 */

let str = prompt('Informe o valor de N');
let N = parseInt(str);

Array.from(Array(10000).keys()).filter((e) => e % N === 2).forEach((x) => console.log(x));

// Usando um for
// for (let i = 1; i <= 10000; i++)
//    if (i % N === 2) print(i);
