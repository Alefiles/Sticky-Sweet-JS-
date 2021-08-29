$(document).ready(function(){
function Producto (id, tipoProd, categoria, sabor, precio) {
    this.id = parseInt(id);
    this.tipoProd = tipoProd.toLowerCase();
    this.categoria = categoria.toLowerCase();
    this.sabor = sabor.toLowerCase();
    this.precio = parseFloat(precio);
    }

// Creo los productos del store

const producto1 = new Producto (1, "galletas", "tradicional", "vainilla", 100);
const producto2 = new Producto (2, "galletas", "tradicional", "vainilla", 100);
const producto3 = new Producto (3, "galletas", "tradicional", "vainilla y chips de chocolate",100);
const producto4 = new Producto (4, "galletas", "tradicional", "chocolate y chips blancos", 100);
const producto5 = new Producto (5, "galletas", "tradicional", "chocolate", 100) ;
const producto6 = new Producto (6, "galletas", "gourmet", "moca con chocolate 60%", 180);
const producto7 = new Producto (7, "galletas", "gourmet", "limon y amapola", 180);
const producto8 = new Producto (8, "galletas", "gourmet", "café y cardamomo", 180);
const producto9 = new Producto (9, "galletas", "gourmet", "naranja y chocolate", 180);
const producto10 = new Producto (10, "galletas", "gourmet", "jengibre y especias", 180);
const producto11 = new Producto (11, "galletas", "gourmet","manteca da maní", 180);
const producto12 = new Producto (12, "rollos", "rolls", "canela", 220);
const producto13 = new Producto (13, "rollos", "rolls", "manzana y canela", 220);
const producto14 = new Producto (14, "rollos", "rolls", "chocolate y naranja", 220);
const producto15 = new Producto (15, "budines", "gourmet", "Banana con trozos de chocolate", 900);
const producto16 = new Producto (16, "budines", "tradicional", "marmolado", 500);
const producto17 = new Producto (17, "budines", "gourmet", "zanahoria y nuez", 900);
const producto18 = new Producto (18, "budines", "gourmet", "limón con amapola", 900);
const producto19 = new Producto (19, "budines", "tradicional", "chocolate", 500);
const producto20 = new Producto (20, "budines", "tradicional", "vainilla", 500);


//Creo el array Productos y lo guardo en el storage
const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20];

const productosStorage =(clave, valor) => {localStorage.setItem(clave, valor)};
productosStorage("listadoProductos", JSON.stringify(productos));


$("#nuestrasSabrosuras").append(`<h2><b>Nuestras Sabrosuras</b></h2>`)
//Agrego los inputs que serviran de filtro

$("#store").append(` <section id="negocio">
                            <h3> Por favor indicanos qué querés pedir y agregalo al carrito</h3>
                        <div id="selectorProductos"> 
                            <label> ¿Qué te gustaría comer?</label>
                            <input id="selecTipo" type="text">
                                <br>
                            <label> ¿Qué sabor?</label>
                            <input id="selecCategoria" type="text">
                                <br>
                            <select id="tipo" text="¿Qué te gustaría comer?">
                                <option value="1" selected> Galletas </option>
                                <option value="2"> Rolls </option>
                                <option value="3"> Budines </option>
                            </select>
                        </div>  

                        <div id ="ProductosHTML"> </div>
                        <div id="tarjetaProducto"></div>
                    </section>`);

//Creo la tarjeta de producto para usarla en el html
let tipoSelec = $("#tipo");
const tipo = JSON.stringify(tipoSelec.value);
//let ProductosHTML = $("#ProductosHTML");
//console.log(productos.childNodes);
let productosHTML = $("#tarjetaProducto");
//hacer el for of y que recorra el array productos y por cada producto cree la tarjeta
// <div>
 /*     <Img>
        <sabor>h4
            precio
            input cantidad  .value
            botón agregar al carro
        
productosHTML.appendChild (productos.map(producto =>`<ul><li>$//{producto.sabor}</li>).join(""));</ul>)`));
*/
});