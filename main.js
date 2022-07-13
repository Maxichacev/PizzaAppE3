const pizzaNombre = document.getElementById("Nombre");

const pizzaPrecio = document.getElementById("Precio");

const input = document.getElementById("pizzaId");

const submit = document.getElementById("submit").addEventListener("click", getPizza);

function getPizza() {
    const pizza = input.value;
    if(variedades[pizza]) {
        pizzaNombre.innerText = variedades[input.value].nombre;
        pizzaPrecio.innerText = `Precio: $${variedades[input.value].precio}`;
    } else if(pizza == "") {
        showError("No has ingresaste noingun id");
    } else {
        showError("No existe ningúna pizza con ese nombre");
    }
}





const variedades = [ {
    id: 1,
    nombre: "Muzzarella",
    ingredientes: ["muzzarella", "salsa"],
    precio: 1000
},

{
    id: 2,
    nombre: "Jamón y Morrón",
    ingredientes: ["muzzarella", "jamón", "morrón", "salsa"],
    precio: 500
},

{
    id: 3,
    nombre: "Palmitos",
    ingredientes: ["muzzarella", "palmitos", "salsa golf"],
    precio: 700
},

{
    id: 4,
    nombre: "Cargada",
    ingredientes: ["muzzarella", "huevo frito", "papas fritas", "bacon"],
    precio: 800
} ]


