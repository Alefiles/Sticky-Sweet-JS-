
function Productos (categoria, sabor, precio) {
    this.categoria= categoria;
    this.sabor= sabor;
    this.precio=precio;
}
const prod1 = new Productos ("tradicional", "vainilla", 100);
const prod2 = new Productos ("tradicional", "vainilla y chips de chocolate",100);
const prod3 = new Productos ("tradicional", "chocolate y chips blancos", 100);
const prod4 = new Productos ("tradicional", "chocolate", 100);
const prod5 = new Productos ("gourmet", "moca con chocolate 60%", 180);
const prod6 = new Productos ("gourmet", "limon y amapola", 180);
const prod7 = new Productos ("gourmet", "café y cardamomo", 180);
const prod8 = new Productos ("gourmet", "naranja y chocolate", 180);
const prod9 = new Productos ("gourmet", "jengibre y especias", 180);
const prod10 = new Productos ("gourmet","manteca da maní", 180);
const prod11 = new Productos ( "rolls", "canela con glaseado", 220);
const prod12 = new Productos ( "rolls", "manzana y canela", 220);
const prod13 = new Productos ( "rolls", "chocolate y naranja", 220);

console.log(productos.length);

//slice tradicional
const tradicional = productos.slice(0,4);
console.log(tradicional);

const gourmet= productos.filter(categoria => categoria = "gourmet");
console.log(gourmet);

const rolls=productos.slice(10,13);
console.log(rolls);

let item_compra = prompt ("que querés comprar?");
console.log(item_compra);

let variedad = prompt ("que variedad querés?");
console.log(variedad);

let q_compra = prompt ("cuantas querés comprar?");
console.log(q_compra);

const precio_trad = productos.filter(productos=>this.precio !="");
console.log(precio_trad);


//function precio_vta (q_compra , precio ){ 
 // const facturacion = q_compra * precio;
//}tradici

//if (item_compra = "tradicional"){
    


  //  alert ("el monto a pagar es de "+ precio_vta());
    
//} 
//else { alert ("Por favor decinos cuantas cookies querés");}