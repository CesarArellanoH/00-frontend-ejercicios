

/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalles;
}

interface Detalles{

    autor:string;
    anio: number;

}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 53,
    cancion: "la chona",
    detalle: {
        autor:"juan",
        anio:2020
    }
}

const {volumen,segundo,cancion,detalle} = reproductor;
const {autor,anio} = detalle;

//console.log(reproductor);

/* console.log('El volumen actual es :' , reproductor.volumen);
console.log('El segundo actual es :' , reproductor.segundo);
console.log('El canción actual es :' , reproductor.cancion);
console.log('El autor actual es :' , reproductor.detalle.autor);
console.log('El año actual es :' , anio); */

// Desestructurar un arreglo

const dbz: string[] = ['goku','vegeta','trunks'];

const [p2,p3] = dbz;

console.log('Personaje 1:',p2);
console.log('Personaje 2:',p3);

console.log(dbz);
