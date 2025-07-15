//Acá se continuará con el temario de las promesas. Video quedó en el minuto 55:03.





//Uitlizando métodos asincronos del módulo fs
//readFile es la forma por default en que se lee un archivo de forma asíncrona

//callback son funciones que se ejecutan cunado una tarea asíncrona ha terminado. Esto ayuda para que NodeJS sepa cuando termine de leer el archivo

const fs = require('node:fs'); // Importa el módulo fs (file system) de Node.js 

console.log('Leyendo el primer archivo...'); // Mensaje para indicar que se está leyendo el primer archivo
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log(text); // Muestra el contenido del archivo en la consola
}); // Lee el contenido del archivo 'archivo.txt' de forma síncrona. utf-8 ayuda a la traducción a lenguaje humano

console.log('---> Haciendo cosas en asíncrono mientras se lee el archivo....'); // Mensaje para indicar que se están haciendo otras cosas mientras se lee el archivo

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log(text); // Muestra el contenido del segundo archivo en la consola
}); // Lee el contenido del archivo 'archivo2.txt' de forma síncrona