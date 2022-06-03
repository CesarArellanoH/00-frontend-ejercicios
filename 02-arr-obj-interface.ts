

/*
    ===== Código de TypeScript =====
*/

let nombre: string = "Juan";
let puntosDevida:number = 100;

let habilidades = ["javascript","TypeScript", "Angular"]

console.log(habilidades);

interface Personaje{
    nombre: string,
    pv: number,
    habilidades: string[],
    domicilios: string,
}


const personaje: Personaje ={
    nombre: "Juan",
    pv:100,
    habilidades:["Javascript","TypeScript","Angular"],
    domicilios:"Callse falsa 123"
}

console.log(personaje);


