//DOM

//let div = document.createElement ("div");
//div.innerHTML="<h1> Nuestras Sabrosuras</h1>";
//document.article.appendChild(div);

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
