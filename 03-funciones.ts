

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number,b: number){
    return a + b;
}

const sumaFlecha = (a: number,b: number): number => a + b;

function multiplicar(numero: number,base: number, otroNumero?: number){
    return numero * base;
}


// ----------------------------------------------------------------

interface PersonajeDC{
    nombre: string;
    pv: number;
    mostarPV: () => void;
}

function curar(personaje: PersonajeDC,curarX: number){
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeDC = {
    nombre:"Batman",
    pv: 100,
    mostarPV: function(){
        console.log('Puntos de vida: ' + this.pv);
        
    }
}

curar(nuevoPersonaje,10);
nuevoPersonaje.mostarPV();

