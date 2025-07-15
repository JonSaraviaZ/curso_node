// console.log('Hola, mundo!'); // Node.js tiene acceso a la consola
// console.info('Hola, mundo!'); // Node.js tiene acceso a la consola
// console.error('Hola, mundo!'); // Node.js tiene acceso a la consola
// El mensaje de la consola solo saldrá en la terminal, no en el navegador
// console.log(window) // window es la variable global en el navegador, pero no en Node.js
// console.log(globalThis) // globalThis es la variable global en Node.js. 
// // globalThis es una variable global que está disponible en todos los entornos de JavaScript


//Patrón de diseño módulo
//Separa el código en diferentes ficheros
//Se va a poder importar y exportar para que ese código se reutilice.

const sum = require('./suma.js'); // Importa el módulo suma.js

console.log(sum(1, 2)); // Llama a la función sum del módulo suma.js y muestra el resultado en la consola



