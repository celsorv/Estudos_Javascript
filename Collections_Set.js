
/*
 * Javascript Collections: Set
 * 
 */ 

const cientistas = new Set();

cientistas.add('Albert Einstein');
cientistas.add('Marie Curie');
cientistas.add('Charles Darwin');
cientistas.add('Stephen Hawking');
cientistas.add('Max Planck');
cientistas.add('Isaac Newton');
cientistas.add('Gottfried Wilhelm Leibniz');
cientistas.add('Louis Pasteur');
cientistas.add('Thomas Edison');
cientistas.add('Nikola Tesla');
cientistas.add('Galileu Galilei');

console.log('\nCientistas:');
cientistas.forEach((value) => console.log(value));



const areasFisica = new Set(
  ['Mecânica', 'termologia', 'Ondulatória',
   'Acústica', 'Óptica', 'Electromagnetismo',
  ]
);

areasFisica.add('Teoria da Relatividade');
areasFisica.add('blablabla');

console.log('\nÁreas da Física:\n',areasFisica);

console.log('\nConverte conjunto em matriz:');
const arr = [...areasFisica];
console.log( arr);

console.log('\nremove "blablabla":');
areasFisica.delete('blablabla');
areasFisica.forEach((value) => console.log(value));

console.log(
  '\nAlbert Einstein foi um cientísta?',
  cientistas.has('Albert Einstein') ? 'Sim' : 'Não'
);

console.log('\nÁreas da Física - itens?', areasFisica.size);
console.log('\nLimpa o conjunto!');
areasFisica.clear();
console.log('\nÁreas da Física - itens?', areasFisica.size);

