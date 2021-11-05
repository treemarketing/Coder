/*
let nombre = prompt ("ingrese nombre");
let apellido = prompt ("ingrese apellido")

let saludo = document.createElement ("div");
saludo.innerHTML = "Hola! " + nombre + " " + apellido;
document.body.appendChild(saludo);


const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const iva = x => x*0.21;
const descuento = y => y*0.10;

let precioPapas = 500;
let precioPollo = 300;
let precioEmpanadas = 100;

let precioFinalPapas = resta(suma(precioPapas, iva(precioPapas)), descuento(precioPapas));
let precioFinalPollo = resta(suma(precioPollo, iva(precioPollo)), descuento(precioPollo));
let precioFinalEmpanadas = resta(suma(precioEmpanadas, iva(precioEmpanadas)), descuento(precioEmpanadas));


const menu = [{nombre: "FINGERS DE POLLO", tipo: "POLLO", precio: precioFinalPollo},
            {nombre: "NUGGETS", tipo: "POLLO", precio: precioFinalPollo},
            {nombre: "POLLO CRISPY", tipo: "POLLO", precio: precioFinalPollo},
            {nombre: "BUFFALOS WINGS", tipo: "POLLO", precio: precioFinalPollo},
            {nombre: "MR. PAPAS", tipo: "PAPAS FRITAS", precio: precioPapas},
            {nombre: "MISS. PAPAS", tipo: "PAPAS FRITAS", precio: precioFinalPapas},
            {nombre: "6 EMPANADAS", tipo: "EMPANADAS", precio: precioFinalEmpanadas},
            {nombre: "12 EMPANADAS", tipo: "EMPANDAS", precio: precioFinalEmpanadas}];

class Producto {
                constructor(producto) {
                    this.nombre  = producto.nombre.toUpperCase();
                    this.tipo = producto.tipo;
                    this.precio  = producto.precio;
                }
            }

            const combo = new Producto({nombre: "Arma tu cono", tipo: "COMBOS", precio: 390 })
            menu.push(combo)

            console.log(combo)

let filtrar = prompt("Elija POLLO, PAPAS FRITAS, EMPANADAS O COMBOS");
            const resultadoFiltro = menu.filter(producto => producto.tipo === filtrar);
            console.log(resultadoFiltro);


//creo arrays carrito y agrego productos por prompt
const carritoPrecio = []
const carritoNombre = []

let confirmacion = prompt("desea agregar productos");
while(confirmacion.toUpperCase() != "NO"){
    let nombreProducto = prompt("agrege producto al carrito");
    let producto = menu.find((producto) => producto.nombre == nombreProducto);
    if(producto){
        carritoPrecio.push(producto.precio)
        carritoNombre.push(producto.nombre)
        confirmacion = prompt("desea agregar productos")
    }else{
        console.log("no contamos con ese producto")
        }
}
let carritoTexto = JSON.stringify(carritoNombre);

let total = 0;
//para sumar lo agregado al carrito
for (let i = 0; i < carritoPrecio.length; i++) {
    total += carritoPrecio[i];
}

let compraTotal = document.createElement("div");
compraTotal.innerHTML = "Su Total a abonar es de: " + total +" Detalle de productos: " + carritoTexto;
document.body.appendChild(compraTotal);

*/

let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

let stockLS = JSON.parse(localStorage.getItem('productos'));

mostrarProductos (stockLS)

function mostrarProductos (array){
    contenedorProductos.innerHTML = '';
    for (const producto of array){
        let div = document.createElement ("div");
        div.classList.add('producto');
        div.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <h6 class="card-text">${producto.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">$${producto.precio}</li>
        </ul>
        <div class="card-body">
            <a id="boton${producto.id}"href="#" class="btn btn-primary">Agregar Carrito</a>
          
        </div>
      </div> `
      contenedorProductos.appendChild(div);
      let boton = document.getElementById(`boton${producto.id}`)

      boton.addEventListener('click', ()=>{
        agregarAlCarrito(producto.id)
    })
    }

}

// function mostrarProductos (array){
//   contenedorProductos.innerHTML = '';
//   for (const producto of array){
//       let div = document.createElement ("div");
//       div.classList.add('producto');
//       div.innerHTML += `<div class="card" style="width: 18rem;">
//       <img src="${producto.img}" class="card-img-top" alt="...">
//       <div class="card-body">
//         <h5 class="card-title">${producto.nombre}</h5>
//         <h6 class="card-text">${producto.desc}</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">$${producto.precio}</li>
//       </ul>
//       <div class="card-body">
//           <a id="boton${producto.id}"href="#" class="btn btn-primary">Agregar Carrito</a>
        
//       </div>
//     </div> `
//     contenedorProductos.appendChild(div);
//     let boton = document.getElementById(`boton${producto.id}`)

//     boton.addEventListener('click', ()=>{
//       agregarAlCarrito(producto.id)
//   })
//   }

// }
function agregarAlCarrito(id){
    let repetido = carritoDeCompras.find(prodR => prodR.id ==id)
    if (repetido){
      repetido.cantidad = repetido.cantidad + 1
      document.getElementById(`cantidad${repetido.id}`).innerHTML = `<li id="cantidad${repetido.id}" class="list-group-item">Cantidad: ${repetido.cantidad}</li>`
      actualizarCarrito()
    }

    else{
    let productoAgregar = stockProductos.find(prod => prod.id == id)
    carritoDeCompras.push(productoAgregar)
    productoAgregar.cantidad = 1
    actualizarCarrito()
    let div = document.createElement("div")
    div.classList.add('productoEnCarrito')
    div.innerHTML = `  <div class="card-body">
    <button type="button" id="eliminar${productoAgregar.id}" class="btn btn-danger">Eliminar</button>
    <h5 class="card-title">${productoAgregar.nombre}</h5>
    <p class="card-text">${productoAgregar.desc}</p>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">$${productoAgregar.precio}</li>
    <li id="cantidad${productoAgregar.id}" class="list-group-item">Cantidad: ${productoAgregar.cantidad}</li>
    
  </ul></div>`
  contenedorCarrito.appendChild(div)

  //eliminar productos del carrito
  let botonEliminar = document.getElementById(`eliminar${productoAgregar.id}`)

  botonEliminar.addEventListener('click', ()=>{
    botonEliminar.parentElement.remove()

    carritoDeCompras = carritoDeCompras.filter(prodE => prodE.id != productoAgregar.id)
    actualizarCarrito() 
  })
  }
}
//actualiza y suma los productos en el carrito 
function actualizarCarrito() {
  contadorCarrito.innerText = carritoDeCompras.reduce((acc, el)=> acc + el.cantidad,0);
  precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad),0)
}
