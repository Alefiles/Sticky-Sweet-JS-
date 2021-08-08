//DOM

//let div = document.createElement ("div");
//div.innerHTML="<h1> Nuestras Sabrosuras</h1>";
//document.article.appendChild(div);

//inicio el carrito

let carrito = [];

const precioConIva = parseFloat((this.precio * 1.21).toFixed(1));


// Solicito info al cliente
let cliente = document.getElementById("cliente");
let clienteJson =JSON.stringify(cliente);
localStorage.setItem("cliente", clienteJson);



function cargarCliente(e){
        e.preventDefault();
        console.log("cliente Enviado");
        
}
//}
//else{
//       console.log ("no se ingresó ningún nombre");
//}


//const clienteGen = prompt ("¿nos quisieras indicar tu género? Femenino, Masculino, No Binario, Otro, No gracias " )
        


//Creo el objeto producto con su constructor

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

// Pregunta el tipo de producto a comprar y genera nuevos array filtrándolo


let itemCompra = prompt ("¿que querés comprar? (galletas, rollos o budines)")
        alert ("elegiste "+ itemCompra);
        console.log (itemCompra);
        const prodSelec = productos.filter (producto => producto.tipoProd == itemCompra);
        console.log (prodSelec);
        for (const Producto of prodSelec) {
                console.log(Producto.id, Producto.tipoProd, Producto.categoria, Producto.sabor, Producto.precio);
        }

const tipoComprado = prompt ("¿qué tipo de " + itemCompra + " querés?");
        alert ("elegiste " + tipoComprado);
        const tipoSelec = prodSelec.filter (producto => producto.categoria == tipoComprado);
        console.log (tipoSelec);
        for (const Producto of tipoSelec) {
                console.log(Producto.id, Producto.tipoProd, Producto.categoria, Producto.sabor, Producto.precio);
        }

const saborComprado = prompt ("seleccioná qué sabor de " + tipoComprado + " querés");
        alert ("el sabor que elegiste es " + saborComprado)
        const saborSelec = tipoSelec.filter (producto => producto.categoria == saborComprado);
        for (const Producto of tipoSelec) {
                console.log(Producto.id, Producto.tipoProd, Producto.categoria, Producto.sabor, Producto.precio);
        console.log (saborComprado);
        localStorage.setItem("prodCarrito")

const cantCompra = parseInt(prompt ("¿Que cantidad de "+ itemCompra + " querés?"));
        console.log (cantCompra);


//for(const Producto of saborComprado) {
      //  let alCarrito =document.createElement("div");
        //contenedor.innerHTML = "<h4> Producto: ${Producto.categoria} </h4>
         //                       <h5> Sabor: ${Producto.sabor}</h5>
        //                        <p> Cantidad: cantCompra </p>
     //                           <b> $ ${Producto.precio}</b>";
       // document.aside.appendChild(alCarrito);
}

const ticketValor = precioConIva()*cantCompra;
        let ticket = document.createElement ("h1")
       // h1.innerHTML.="<h1> Muchas gracias por tu compra el total es de:<h1>";
        document.aside.appendChild(ticket);
        alert ("el total de tu compra de " + cantCompra + " "+ tipoComprado + " de " + saborComprado + " es:$ " + ticketValor) ;