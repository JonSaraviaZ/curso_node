//Sistema de archivos

const fs = require('node:fs'); // Importa el módulo fs (file system) de Node.js

//ejecución de funciones del módulo fs sincrono
const stats = fs.statSync('./archivo.txt'); // Obtiene información del archivo 'archivo.txt'

console.log(
    stats.isFile(), // Verifica si es un archivo
    stats.isDirectory(), // Verifica si es un directorio
    stats.isSymbolicLink(), // Verifica si es un enlace simbólico
    stats.size, // Muestra el tamaño del archivo en bytes
)
