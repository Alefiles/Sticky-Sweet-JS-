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

//Creo la tarjeta de producto para usarla en el html

let ProductosHTML = $("#ProductosHTML");
console.log(productos2.childNodes);


const card = (texto) => `
 <<div> ${texto.tipoProd}</div>
    <div>${texto.sabor}</div>
    <img scr="${texto.img}" alt="imagen del producto"></div>
    <div>${texto.precio}</div>
    </div>
<br>
`;

//productos2[].innerHTML = productos.map(productos => card(productos2)).join ("");
