/***
 *   Checks if string (phrase or word) is a palindrome
 *   by Celso R. Vitorino
 *
 */

function isPalindrome(str) {
  
  // parameter validation --------------
  if (!str) throw 'Invalid parameter.';
  
  if (typeof str !== 'string') 
    throw 'Incompatible type parameter';
  // -----------------------------------

  tempStr = str.toLowerCase()
               .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // removes accents
               .replace(/[^a-z0-9]/g, '')                        // removes special characters and blank spaces
               .split('');

  return tempStr.join('') === tempStr.reverse().join('');
  
}

// testing the function

strList = [
  'arara', 
  'ovo', 
  'uva',
  'osso', 
  'A Daniela ama a lei? Nada!',
  'banana',
  'Luza Rocelina, a namorada do Manuel, leu na moda da romana: "anil é cor azul"'
];

console.log('\nÉ palíndromo:\n')

try {
  
  for (let s of strList)
    console.log(`${isPalindrome(s) ? '[ok]' : '[  ]'} ${s}`);
  
} catch(e) {
  console.log(e); // show the exception
  
}
