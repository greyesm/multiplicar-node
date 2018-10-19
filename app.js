//usar yargs para usar en llamanda de la app y facilitar el 
//envio de parametros

const { crearArchibo } = require('./utils/utilidades.js');
const { listarArchibo } = require('./utils/utilidades.js');

const opciones = {
    base: { demand: true, alias: 'b' },
    limite: { alias: 'c', default: 5 }
}
const argv2 = require('yargs')
    .command('listar', 'show tabla multiplicar', {
        base: { demand: true, alias: 'b' },
        limite: { alias: 'c', default: 5 }
    })
    .command('crear', 'show tabla multiplicar', opciones)
    .help()
    .argv;

console.log(argv2.base);
let base = argv2.base;


let comando = argv2._[0]; //posicion de arreglo que tien listar o crear
console.log(comando);
base = argv2.base;
limite = argv2.limite;
console.log(limite);

switch (comando) {
    case 'crear':
        crearArchibo(base, limite)
            .then(archivo => console.log('creado'))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarArchibo(base, limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

};




//let base = 5;  //reemplazar por entrada desde la terminal con process
//let elemento = process.argv;
//let parametro = elemento[2];
//let base = parametro.split('=')[1];
//fin llamar con parametro desde terminal formato llamada es
//node app base=1
//console.log(elemento);