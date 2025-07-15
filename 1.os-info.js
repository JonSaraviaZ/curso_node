const os = require ('node:os');// se importa el módulo os para obtener información del sistema operativo

console.log('Información del sistema operativo:');
console.log('----------------------------------');

console.log(`Sistema operativo: ${os.type()}`); // muestra el tipo de sistema operativo
console.log('Versión del sistema operativo: ', os.release()); // muestra la versión del sistema operativo
console.log('Plataforma: ', os.platform()); // muestra la plataforma del sistema operativo
console.log('Arquitectura: ', os.arch()); // muestra la arquitectura del sistema operativo
console.log('CPU: ', os.cpus()); // muestra información sobre los procesadores del sistema
console.log('Memoria libre: ', os.freemem() / 1024 / 1024); // muestra la memoria libre del sistema
console.log('Memoria total: ', os.totalmem()/ 1024 / 1024); // muestra la memoria total del sistema
console.log('uptime', os.uptime() /60/60); // muestra el tiempo en el que nuestro computador ha estado encendido o activo