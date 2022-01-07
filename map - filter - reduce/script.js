
/***
 * Map - Passando o valor do this para a função
 * 
 */

const banana = {
   duziasNaCaixa: 10,
};

const laranja = {
   duziasNaCaixa: 8,
}

console.log('\nPassando o this:')

// thisArg define o valor do this dentro da função
function mapComThis(arr, thisArg) {
   return arr.map(function (item) {
      return item * this.duziasNaCaixa;
   }, thisArg);
}

const caixas = [1, 2];

console.log('this -> banana', mapComThis(caixas, banana));
console.log('this -> maca', mapComThis(caixas, laranja));

/***
 * Map - Sem passar o this para a função
 * 
 */

function mapSemThis(arr) {
   return arr.map(function (item) {
      return item * 2;
   })
}

const nums = [2, 4, 6, 8, 10];

console.log('\n\nSem passar o this:')

console.log(mapSemThis(nums));




/***
 * Filter - somente os números pares do array
 * 
 */

function filtrarPares(arr) {
   return arr.filter(callbackFilter);
}

function callbackFilter(item) {
   return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrarPares(meuArray));

console.log("\nMesma funcionalidade, com uma única linha-instrução")
console.log(meuArray.filter((item) => item % 2 === 0));




/***
 * Reduce - Soma dos elementos do array
 */

function somaNumeros(arr) {
   return arr.reduce(function(previousValue, currentValue) {
      console.log({ previousValue });
      console.log({ currentValue });
      return previousValue + currentValue;
   });
}

const arr = [1, 2];

console.log('\nReduce - Soma elementos do array');
console.log(`A soma é: ${somaNumeros(arr)}`);

console.log('\nMesmo resultado com uma única linha-instrução');
const total = arr.reduce( (previousValue, currentValue) => previousValue + currentValue);
console.log(`A soma é: ${total}`);

/***
 * Reduce - Obtendo o saldo final
 */

const lista = [
   {
      name: 'arroz',
      preco: 17.98,
   },
   {
      name: 'trigo',
      preco: 3.59,
   },
   {
      name: 'biscoito',
      preco: 2.49,
   }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, arr) {
   return arr.reduce(function (previousValue, currentValue, index) {
      console.log('rodada', index + 1);
      console.log({ previousValue });
      console.log({ currentValue });
      return previousValue - currentValue.preco;
   }, saldoDisponivel);
}

console.log('\nReduce - Calculo do saldo:');
console.log(`Saldo final: ${calculaSaldo(saldoDisponivel, lista)}`);

console.log('\nMesmo resultado com uma única linha-instrução');
const saldo = lista.reduce( (prev, elem) => prev - elem.preco, saldoDisponivel);
console.log(`O saldo é: ${saldo}`);






