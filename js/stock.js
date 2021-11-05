let stockProductos = [
    {id: 1, nombre: "Combo Miss Papas", tipo: "Papas Fritas", desc: "Cono de papas fritas + 1 topping + 1 porcion de pollo", precio: 390,  img: 'multimedia/cono.jpg', cantidad:1},
    {id: 2, nombre: "6 Empanadas", tipo: "Empanadas", desc: "6 Empanadas de carne", precio: 400,  img: 'multimedia/empanadas6.jpg', cantidad:1},
    {id: 3, nombre: "Miss Papas", tipo: "Papas Fritas", desc: "Cono mediano de papas fritas", precio: 170,  img: 'multimedia/papas.jpg', cantidad:1},
    {id: 4, nombre: "Combo Cono", tipo: "Combo", desc: "cono de papas fritas con una porción de pollo a elección", precio: 390,  img: 'multimedia/cono.jpg', cantidad:1},
    {id: 5, nombre: "Combo Balde", tipo: "Combo", desc: "Medio balde de papas fritas más 2 porciones de pollo a elección", precio: 890,  img: 'multimedia/balde.jpg', cantidad:1},
    {id: 6, nombre: "Pollo Crispy", tipo: "Pollo", desc: " 6 piezas de pollo crujiente con cereales", precio: 450,  img: 'multimedia/pollo-crispy.jpg', cantidad:1},
    {id: 7, nombre: "Finger Crispy", tipo: "Pollo", desc: "10 tiras de pollo crujiente con cereales.", precio: 450,  img: 'multimedia/pollo-finger.jpg', cantidad:1},
    {id: 8, nombre: "Buffalos Wings", tipo: "Pollo", desc: "10 Piezas de Alitas de pollo con salsa picante.", precio: 500,  img: 'multimedia/pollo-buffalo.jpg', cantidad:1},
    {id: 9, nombre: "12 Empanadas", tipo: "Empanada", desc: "Docena de empanadas fritas.", precio: 550,  img: 'multimedia/empanadas12.jpg', cantidad:1},
    {id: 10, nombre: "Miss. Papas", tipo: "Papas Fritas", desc: "Porción de papas fritas.", precio: 170,  img: 'multimedia/cono.jpg', cantidad:1},
    // {id: 11, nombre: "Remera 5", tipo: "remera", desc: "Una remera que re va con vos", precio: 700,  img: '/img/empanadas6.jpg', cantidad:1},
    // {id: 12, nombre: "Remera 6", tipo: "remera", desc: "Una remera que re va con vos", precio: 700, , img: '/img/empanadas6.jpg', cantidad:1},
]

localStorage.setItem('productos' , JSON.stringify(stockProductos));


const MENU  = [{
    "id" : 4,
    "name" : "Combo Cono",
    "info" : "cono de papas fritas con una porción de pollo a elección",
    "imgRoute" : "img/burgerItem/bigMc.png",
    "price" : 390,
}, {
    "id" : 5,
    "name" : "Combo Balde",
    "info" : " Medio balde de papas fritas más 2 porciones de pollo a elección",
    "imgRoute" : "img/burgerItem/cuartoDeLibra.png",
    "price" : 890,
}, {
    "id" : 6,
    "name" : "Pollo Crispy",
    "info" : " 6 piezas de pollo crujiente con cereales.",
    "imgRoute" : "img/burgerItem/mcPollo.png",
    "price" : 450,
}, {
    "id" : 7,
    "name" : "Finger Crispy",
    "info" : "10 tiras de pollo crujiente con cereales.",
    "imgRoute" : "img/burgerItem/mcnifica.png",
    "price" : 450,
}, {
    "id" : 8,
    "name" : "Buffalos Wings",
    "price" : 450,
    "info" : "10 Piezas de Alitas de pollo con salsa picante.",
    "imgRoute" : "img/burgerItem/mcduo.png",
}, {
    "id" : 9,
    "name" : "12 Empanadas",
    "price" : 550,
    "info" : "Docena de empanadas fritas.",
    "imgRoute" : "img/burgerItem/bacon.png",
}, {
    "id" : 10,
    "name" : "Miss. Papas",
    "price" : 170,
    "info" : "Porción de papas fritas.",
    "imgRoute" : "img/burgerItem/bacon.png",
}];