

/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    nombre:string;
    precio:number;
}

const telefono: Producto = {
    nombre:'Iphone',
    precio:1000,
}

const tablet: Producto = {
    nombre:'Ipad',
    precio:2000,
}

export function calculaISR(producto:Producto[]):[number, number]{

let total = 0;
producto.forEach(producto => {
    total += producto.precio
});

return [total, total * 0.16];

}

const articulos = [telefono,tablet];

const [total,ISV] = calculaISR(articulos);

// console.log('Total : $ ' , total);
// console.log('ISR : $ ' , ISV);



