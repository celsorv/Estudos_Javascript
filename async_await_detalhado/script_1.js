
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos'


/*
 * Utilizando Promisses com .then()
 *
 */

function getUser(userId) {

    const userData = fetch(`${BASE_URL}/${userId}`)
        .then(response => {

            console.log('Dados chegaram!')
            return response.json()

        })

        .then(data => console.log('Dados --->>', data.title))

        .catch(error => console.log(error))

        .finally(() => console.log("::: F I M   D A   O P E R A Ç Ã O :::"))
}
   
getUser(5);