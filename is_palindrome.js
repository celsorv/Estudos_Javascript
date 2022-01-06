/***
 *   Checks if string (phrase or word) is a palindrome
 *   by Celso R. Vitorino
 *
 */

function isPalindrome(str) {
  
  // parameter validation ----------------------------------------------------
  if (!str) throw new InvalidParameterException();
  
  if (typeof str !== 'string') throw new IncompatibleTypeParameterException();
  // -------------------------------------------------------------------------

  tempStr = str.toLowerCase()
               .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // removes accents
               .replace(/[^a-z0-9]/g, '')                        // removes special characters and blank spaces
               .split('');

  return tempStr.join('') === tempStr.reverse().join('');
  
}


// user defined exceptions ----------------------------------
function InvalidParameterException(message) {
     if (!message) 
        message = 'Parameter Value empty or null';
        
     this.message = message;
     this.name = 'InvalidParameterException';
     
     this.toString = function() {
         return `${this.name}: ${this.message}`;
     }
 }

function IncompatibleTypeParameterException(message) {
     if (!message) 
        message = 'Parameter must be of type string';
        
     this.message = message;
     this.name = 'IncompatibleTypeParameter';
     
     this.toString = function() {
         return `${this.name}: ${this.message}`;
     }
 }
// ---------------------------------------------------------



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
  for (let s of strList) {
    console.log(`${isPalindrome(s) ? '[ok]' : '[  ]'} ${s}`);
  }
  
} catch(e) {
  throw e;
  
} finally {
  console.log('--- Process finished ---');
  
}
