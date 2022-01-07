
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'

/*
 * Resolvendo várias Promises
 *
 */

 
//  const endpoints = [
//    `${BASE_URL}/1`
//    `${BASE_URL}/2`
//  ]

// Produz os endpoints de 1 a 10 acima
const endpoints = Array.from(Array(10).keys()).map( (n) => `${BASE_URL}/${n + 1}` )

// Promises para cada um dos 10 endpoints
const promises = endpoints.map( url => fetch(url).then( response => response.json() ) )

Promise.all(promises).then(
    data => data.forEach( (element, index, array) => console.log(`Dados --->> (${index}) ${element.title}`) )
)
    
