
/*
 * Gera frases a partir de sequência numérica e imprime-a
 *
 */

let elementos = 10
let sequencia = Array.from(Array(elementos).keys())  // [0, 1, 2, ..., 9]

let frases = sequencia.map( (elemento) => `Bola número ${elemento + 1}`)

// frases[0] = 'Bola número 1
// frases[n] = 'Bola número (n + 1)

frases.forEach( (element, index, array) => console.log(element))

console.log('\n\nNovamente:\n')

//
// Juntando tudo em uma única instrução
//
Array.from(Array(elementos).keys())
        .map((e) => `Bola número ${e + 1}`)
        .forEach((element, index, array) => console.log(element))
