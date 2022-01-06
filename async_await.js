
function primeiraFuncao() {

    tempo = 2000    // 2000 ms

    return new Promise((resolve) => {

        setTimeout(() => {
            
            console.log(`Passaram-se ${tempo / 1000} segundo(s)`)
            resolve()
            
        }, tempo)

    })
}

async function segundaFuncao() {
    
    console.log("Iniciou")
    
    await primeiraFuncao()
    
    console.log("Terminou")
    
}

segundaFuncao();
