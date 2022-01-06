/*
 * Promises, ASync e await
 * 
 */


dialogo = [
  'Chamando...',
  'Annie: Clínica de massagem, Annie, bom dia!',
  'Lilly: Oi Annie, bom dia...',
  'Annie: Em que posso ajudar?',
  'Lilly: Gostaria de agendar um horário!',
  'Annie: Você prefere de manhã ou à tarde?',
  'Lilly: De manhã, por favor!',
  'Annie: Pode ser na quinta-feira às 9 horas?',
  'Lilly: Perfeito!',
  'Annie: Como é o nome?',
  'Lilly: Lilly de Coimbra',
  'Annie: Ok, está agendando!',
  'Lilly: Obrigado Annie, até quinta-feira.',
  'Annie: Até quinta. Tenha um bom dia!',
  'Lilly: Obrigado, igualmente!',
  'Ligação encerrada!'
]

// tempo aleatório entre 1,5 e 6 segundos
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;


// Promisse da mensagem seguinte
const acao = (msg) => {

  tempoEspera = getRandomArbitrary(1500, 6000)

  return new Promise((resolve) => {

    setTimeout( () => {
      console.log(`\n${msg}`)
      resolve()
    }, tempoEspera)

  })

}

// aciona promisse
(async () => {

  for (d of dialogo) {
    await acao(d)
  }

})()
