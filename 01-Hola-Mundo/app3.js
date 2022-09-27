console.log('Inicio del programa'); // 1::1

setTimeout( () => {
    console.log('Primer del programa'); //5
}, 3000 );

setTimeout( () => {
    console.log('Segundo del programa'); //2
}, 0 );

setTimeout( () => {
    console.log('Tercer del programa'); //3
}, 0 );

console.log('Fin del programa'); // 4::2