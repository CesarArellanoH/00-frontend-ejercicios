

/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{

    constructor(
        public nombre: string,
        public direccion: string
     ){}
}

class Heroe extends PersonaNormal{

    constructor(
        public alterEgo: string, 
        public nombreReal:string,
        public edad: number) {
        super(nombreReal,'New York, NY');
    }

}

const iroman = new Heroe('Iroman','Tony start',40);

console.log(iroman);


