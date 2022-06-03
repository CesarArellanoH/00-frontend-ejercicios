

/*
    ===== Código de TypeScript =====
*/


function queTipoSoy<T>(argumento:T){
    return argumento;
}

let soyString = queTipoSoy('Hola');
let soyNumero = queTipoSoy(2);
let soyBooleano = queTipoSoy(true);
let soyArray = queTipoSoy([1,2,3]);
let soyObjeto = queTipoSoy({nombre:"juan",edad: 30});


console.log(soyObjeto);
