

/*
    ===== Código de TypeScript =====
*/

import {Producto,calculaISR} from './06-desestructuracion-funcion'


const carritoCompras: Producto[] =[

    {
        nombre:'Iphone',
        precio:1000
    },
    {
        nombre:'samsung',
        precio:500
    }
    
]

const[total,ISV ] = calculaISR(carritoCompras);

console.log('Total : $ ' , total);
console.log('ISR : $ ' , ISV);
