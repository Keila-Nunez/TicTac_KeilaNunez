//SALIR DE LA SESION
const desloguear = document.getElementById(`desloguear`);
desloguear.addEventListener("click", () => {
    localStorage.setItem('LOGIN', 'NO');
    location.href = "../pages/iniciarsesion.html";
})

let serviciosEnCarrito = localStorage.getItem("servicios-en-carrito");
serviciosEnCarrito = JSON.parse(serviciosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoServicios = document.querySelector("#carrito-servicios");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito__servicio__eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarServiciosCarrito() {
    if (serviciosEnCarrito && serviciosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoServicios.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoServicios.innerHTML = "";
    
        serviciosEnCarrito.forEach(servicio => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-servicio");
            div.innerHTML = `
            <div class="carrito__servicio">
                <img class="carrito__servicio__imagen" src="${servicio.imagen}" alt="${servicio.titulo}">
                <div class="carrito__servicio__nombre">
                    <small>Título</small>
                    <h2 class="servicio">${servicio.titulo}</h2>
                </div>
                <div class="carrito__servicio__cantidad">
                    <small>Cantidad</small>
                    <p>${servicio.cantidad}</p>
                </div>
                <div class="carrito__servicio__precio">
                    <small>Precio</small>
                    <p>$${servicio.precio}</p>
                </div>
                <div class="carrito__servicio__subtotal">
                    <small>Subtotal</small>
                    <p>$${servicio.precio * servicio.cantidad}</p>
                </div>
                <button class="carrito__servicio__eliminar" id="${servicio.id}"><i class="bi bi-trash-fill"></i></button>
            </div>`;
    
            contenedorCarritoServicios.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoServicios.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
}

cargarServiciosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito__servicio__eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = serviciosEnCarrito.findIndex(servicio => servicio.id === idBoton);
    
    serviciosEnCarrito.splice(index, 1);
    cargarServiciosCarrito();

    localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    serviciosEnCarrito.length = 0;
    localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
    cargarServiciosCarrito();
}


function actualizarTotal() {
    const totalCalculado = serviciosEnCarrito.reduce((acc, servicio) => acc + (servicio.precio * servicio.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {

    serviciosEnCarrito.length = 0;
    localStorage.setItem("servicios-en-carrito", JSON.stringify(serviciosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoServicios.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

}
