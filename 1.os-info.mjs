import { type, release, platform, arch, cpus, freemem, totalmem, uptime } from 'node:os';// se importa el módulo os para obtener información del sistema operativo

console.log('Información del sistema operativo:');
console.log('----------------------------------');

console.log(`Sistema operativo: ${type()}`); // muestra el tipo de sistema operativo
console.log('Versión del sistema operativo: ', release()); // muestra la versión del sistema operativo
console.log('Plataforma: ', platform()); // muestra la plataforma del sistema operativo
console.log('Arquitectura: ', arch()); // muestra la arquitectura del sistema operativo
console.log('CPU: ', cpus()); // muestra información sobre los procesadores del sistema
console.log('Memoria libre: ', freemem() / 1024 / 1024); // muestra la memoria libre del sistema
console.log('Memoria total: ', totalmem()/ 1024 / 1024); // muestra la memoria total del sistema
console.log('uptime', uptime() /60/60); // muestra el tiempo en el que nuestro computador ha estado encendido o activo