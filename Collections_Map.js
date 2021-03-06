/*
 * Javascript Collections: Map
 * 
 */ 

chaveValor = new Map();

chaveValor.set('Zuleica', 58);
chaveValor.set('Fabiana', 25);
chaveValor.set('Ariane', 30);
chaveValor.set('Ariane', 'morena');

console.log(chaveValor)   // saída: {'Zuleica' => 58, 'Fabiana' => 25, 'Ariane' => 'morena'}



const map = new Map(
  [
    ['animal', 'cachorro'],
    ['figura', 'triângulo'],
    ['cidade', 'São Paulo'],
    ['pais', 'Brasil'],
  ]
);

map.set('cor', 'azul');

console.log();
console.log('Tem tubarão?', map.has('tubarão') ? 'Sim' : 'Não');

console.log('Tem animal ?', map.has('animal') ? 'Sim' : 'Não');

console.log('\nQual animal?', map.get('animal'));

console.log('\nQuantos elementos?', map.size);

console.log('\n', map);

console.log('\nTem cidade?', map.has('cidade') ? 'Sim' : 'Não');

console.log('Remove cidade!!!');
map.delete('cidade');

console.log('\n', map);

map.clear();

console.log('\n', map);

const brasilCampeao = new Map(
  [
    [1958, 'Suécia'],
    [1962, 'Chile'],
    [1970, 'México'],
    [1994, 'EUA'],
    [2002, 'Japão e Coreia do Sul']
  ]
);

console.log('\nBrasil campeão da Copa do Mundo:');

console.log(brasilCampeao.keys());

console.log('\nPaís sede:')
console.log(brasilCampeao.values());

console.log('\nou seja:\n');
console.log(brasilCampeao.entries());

console.log('\n -- forEach:');
brasilCampeao.forEach((value, key) => console.log(`${key}: ${value}`));

console.log('\n -- for...of');
for (const [key, value] of brasilCampeao)
  console.log(`${key}: ${value}`);

