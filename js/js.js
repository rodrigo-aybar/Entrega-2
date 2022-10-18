class Pizza {
    constructor (id, nombre, precio, ingredientes){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.ingredientes = ingredientes
    }
}

const pizzas = [
    pizza = new Pizza (1, 'Fugazza', 800, ['cebolla', 'muzzarella']),
    pizza = new Pizza (2, 'Napolitana', 900, ['mozarella', 'tomate']),
    pizza = new Pizza (3, 'Cuatro Estaciones', 1000, ['alcauciles', 'jamon', 'aceitunas', 'champiñones']),
    pizza = new Pizza (4, 'Cuatro Quesos', 1100, ['mozarella', 'gorgonzola', 'parmesano',  'fontina']),
    pizza = new Pizza (5, 'Hawaiana', 1200, ['piña', 'jamon', 'cocido', 'mozarella']),
    pizza = new Pizza (6, 'Chorizos', 1300, ['queso', 'chorizos']),
]

// 🔥 Crear una iteración del array que imprima en consola 🔥
// 🔥 A) Las pizzas que tengan un id impar.

//const impar = (e) => {
//    const idImpar = pizzas.filter((e) => e.id % 2 == !0);
//    console.log('Las pizas con ID Impar son:');
//    idImpar.forEach((e) => {console.log(e.nombre)})
//}

//impar(pizzas);

// 🔥 B) ¿Hay alguna pizza que valga menos de $1000?

//const menorA = (e) => {
//    const menorA = e.filter((e) => e.precio < 1000);
//    console.log('Las pizzas con un precio menor a $1000 son:');
//    menorA.forEach(e => {console.log(e.nombre)});
//}

//menorA(pizzas);

// 🔥 C) El nombre de cada pizza con su respectivo precio.

//const nombreYPrecio = (e) => {
//    const x = pizzas.map(e => {
//        return {
//            nombre: e.nombre,
//            precio: e.precio,
//        }
//    });
//    x.forEach(e => {console.log(`La Pizza ${e.nombre} tiene un predio de $${e.precio}`)})
//}

//nombreYPrecio(pizzas);

// 🔥 D) Todos los ingredientes de cada pizza

//pizzas.forEach(e => {
//    console.log(`La Pizza ${e.nombre} tiene los siguientes ingredientes:`);
//
//    e.ingredientes.forEach((e)=>{
//        console.log(`_${e}`)
//    })
//});

// 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥