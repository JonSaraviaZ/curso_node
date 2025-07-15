// js - > por defecto uta CommmonJS
// .mjs - > para utilizar ES Modules
// .cjs -> para utilizar CommonJS

import { sum, sub, mult } from './suma.mjs'; // Importa la función sum del módulo suma.js  

console.log(sum(1, 2)); // Llama a la función sum del módulo suma.js y muestra el resultado en la consola
console.log(sub(5, 3)); // Llama a la función sub del módulo suma.js y muestra el resultado en la consola
console.log(mult(2, 3)); // Llama a la función mult del módulo suma.js y muestra el resultado en la consola