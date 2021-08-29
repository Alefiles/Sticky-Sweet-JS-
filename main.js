$(document).ready(function (){

let nombre = document.getElementById("cliente");
let bienvenida = document.getElementById("enviarF");

localStorage.removeItem("cliente");

//escucho el evento click del botón de envío
    bienvenida.addEventListener("click", function(e){
        e.preventDefault(); //previene el refresco automático de la página
        //cargo en el local Storage lo que ingresa el usuario
        
        let clStorage = JSON.stringify(nombre.value);
        localStorage.setItem("cliente",clStorage);

        
        let tituloSaludo = document.getElementById("Bienvenida");
        let usrStored = JSON.parse(localStorage.getItem("cliente")); //busca en el storage el nombre ingresado
        
            function saludar (){
            tituloSaludo.innerHTML = `Bienvenid@ ${usrStored}, a disfrutar!`;
            document.article.appendChild(tituloSaludo);
            
            };
        
        saludar();    
        
        $("#negocio").slideDown("slow");
        

    });
    
$("h2").css({"color": "brown",
            "textAlign": "center",});

$("#finPres").css({"textAlign": "center",
                "color": "magenta",});
$("#contactPic").css({
    "will": "transform",
    "transform": "perspective(300px) rotateX(0deg) rotateY(0deg)",});
});