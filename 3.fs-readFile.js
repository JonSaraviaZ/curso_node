const fs = require('node:fs'); // Importa el módulo fs (file system) de Node.js 

console.log('Leyendo el primer archivo...'); // Mensaje para indicar que se está leyendo el primer archivo
const text = fs.readFileSync('./archivo.txt', 'utf-8'); // Lee el contenido del archivo 'archivo.txt' de forma síncrona. utf-8 ayuda a la traducción a lenguaje humano

console.log(text); // Muestra el contenido del archivo en la consola

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8'); // Lee el contenido del archivo 'archivo2.txt' de forma síncrona

console.log(secondText); // Muestra el contenido del segundo archivo en la consolas

