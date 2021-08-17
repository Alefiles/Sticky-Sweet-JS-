// Cambio estilo en el nav al apretar el botón

/*let botonNav = document.getElementById("btnNav");
botonNav.onmousedown = () => {
style.backgroundColor = "lightblue";
}*/
//inicio el carrito
let carrito = [];

const precioConIva = parseFloat((this.precio * 1.21).toFixed(1));

$(document).ready(function(){
//selecciono los elementos del DOM
//
const form = $("#formulario_Cliente");
const inputCl = $("#Cliente");
const enviarF = $("#enviaF");
const Bienvenida = $("Bienvenida");
const tipo = $("#selecTipo");
const catego = $("#selecCategoria");

<<<<<<< Updated upstream
=======
// Solicito info al cliente
let cliente = document.getElementById("cliente");
cliente.onkeyup = () => {console.log ("apreto tecla")};
//let clienteJson =JSON.stringify(cliente);
//localStorage.setItem("cliente", clienteJson);



//function cargarCliente(e){
//        e.preventDefault();
//        console.log("cliente Enviado");
        
//}
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
>>>>>>> Stashed changes

//Escucho el enviar del formulario
form.submit(function(event){
        event.preventDefault();
// Solicito info al cliente
const clienteJS = inputCl.val();

const clienteJson = JSON.stringify(clienteJS);
localStorage.setItem("cliente", clienteJson);


//$("#Bienvenida").text("Llegaste "+clienteJson);
$("#Bienvenida").text('Texto de sustitución');
});
});
