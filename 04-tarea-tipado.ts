

/*
    ===== Código de TypeScript =====
*/

interface Direccion{
    calle: string,
    pais: string,
    ciudad: string,
    numero?:number,
}

interface superHeroe{
    nombre: string;
    edad: number;
    direccion:Direccion;

    mostrarDireccion(): string;

}

const primerHeroe:superHeroe ={
    nombre: 'Batman',
    edad: 30,
    direccion:{
        calle:'Av Siempreviva',
        pais: 'EEUU',
        ciudad: 'Gothan'
    },
    mostrarDireccion(){
        return `${this.nombre},${this.direccion.calle},${this.direccion.ciudad},${this.direccion.pais}`;
    }
}

const direccion = primerHeroe.mostrarDireccion();
console.log(direccion);
