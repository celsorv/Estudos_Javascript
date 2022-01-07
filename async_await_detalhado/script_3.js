
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

/*
 * Utilizando o async/await
 *
 */

 // --------------------------------------------------------------
 // A palavra-chave 'await' recebe uma Promise e a transforma 
 // em um valor de retorno.
 // Ao utilizar 'await', o Javascript vai aguardar até que a
 // Promise finalize.
 //
 // Se finalizada com sucesso (fulfilled), o valor obtido é
 // retornado. Se a Promise for rejeitada (rejected), o erro
 // lançado pela exceção é retornado.
 //
 // Obs: Só é possível usar 'await' em funções declaradas 
 // com a palavra-chave 'async'.
 //
 // Uma função declarada como 'async', por baixo dos panos,
 // significa que seu valor de retorno será uma Promise.
 // --------------------------------------------------------------

 async function getUser(userId) {
    let response = await fetch(`${BASE_URL}/${userId}`)
    let userData = await response.json()
    return userData.title   // não precisa de 'await' no return
 }

 // --------------------------------------------------------------
 // Obs: Só é possível usar 'await' em funções declaradas 
 // com a palavra-chave 'async'.
 // --------------------------------------------------------------

/*
// IIEE - Immediately-invoked function expression
( 
    async () => console.log(
            `Dados --->> [${await getUser(1)}]`
        ) 
)()
*/

// ou pode-se usar .then() já que o retorno é uma Promise
getUser(1).then(getUser(2))
    .then(title => console.log(`Dados --->> [${title}]`))


// --------------------------------------------------------------
// Nota:
// async/await é uma opção mais "legível" ao .then(), mas, estes
// não são métodos logicamente equivalentes:
//
// com async/await o processamento é feito sequencialmente, já
// que a cada linha await é aguardado a execução da Promises.
// Já as Promises com .then() são processadas em paralelo, e
// a callback contida no .then() é acionada quando a operação
// é completada, fazendo deste o método mais rápido.
// --------------------------------------------------------------

/*

// código exemplo

async function getCartaoFuncionario(funcId) {

    const response    = await fetch(`https://api.com/funcionario/${funcId}`)
    const funcionario = await response.json()

    // Promise.all faz as requisições em paralelo
    return await Promise.all(funcionario.cartoes.map(async (cartaoId) => {
 
        const response = await fetch(`https://api.com/cartao/${cartaoId}`)
        const cartao = await response.json()
        return cartao.totalHoras
 
    }))

}

*/
