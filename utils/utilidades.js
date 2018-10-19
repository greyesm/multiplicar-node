const fs = require('fs');

let base = 1;


let listarArchibo = (base, limite) => {

    return new Promise((resolve, reject) => {

        data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${ i } es ${ i * base}\n`;

        }
        resolve(data);
    })
}

let crearArchibo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`No es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`almacen/tabla-${ base }.txt`, data, (err) => {
            //if (err) throw err;
            if (err)
                reject(err);
            else
                resolve(`archivo- ${ base}.txt`)
                //console.log(`Se creo el archivo- ${ base}.txt`);
        });

    });
}

//crearArchibo(base)
//    .then(archivo => console.log(`archivo creado: ${ archivo} `));


//exportar para usar la funcion desde el archivo app.js
module.exports = {
    crearArchibo,
    listarArchibo
}