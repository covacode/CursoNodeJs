const deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneracion',
    // edad : 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder  = deadpool.poder;

function imprimeHeroe( heroe ){
    const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}

// imprimeHeroe(deadpool);

const heroes = [ 'Deadpool', 'Superman', 'Batman' ];

// const h0 = heroes[0];
// const h1 = heroes[1];
// const h2 = heroes[2];

const [, , h2] = heroes;

console.log(h2);