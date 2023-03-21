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

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 
// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

const tuPizza = document.getElementById('pizzaPrecio')
const input = document.getElementById('input')
const btn = document.getElementById('btn')

// Funcion de busqueda (Pizza)
const busquedaPizza = (valor) => pizzas.find(e => e.id === valor);

// Funcion de Busqueda (Submit)
const busquedaSubmit = () => {
    const valorInput = input.value;
    const pizzaSeleccionada = busquedaPizza(valorInput);
    //renderPizza(pizzaSeleccionada);
    console.log(pizzaSeleccionada);
};

// Render
const renderPizza = (e) => {
    tuPizza.innerHTML = `
    <h2>Pizza: ${e.nombre}</h2>
    <h3>Precio: ${e.precio}</h3>
    `
};

const init = () => {
    btn.addEventListener('click', busquedaSubmit);
};
init();