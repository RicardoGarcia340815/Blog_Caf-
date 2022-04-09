//QUERYSELECTOR
const heading = document.querySelector(".header__texto h2");//Retorna 0 o 1 elemento
console.log(heading);
//heading.textContent = "No mameyes"; Modificaria el texto del html desde javascript

//QUERYSELECTORALL
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces); 
//Si quieres seleccionar 1 en especifico = console.log(enlaces[0]);
//Cambiar de texto exactamente 1 elemento enlaces[0].textContent = "No mameyes";

//GETELEMENTBYID
const heading2 = document.getElementById("heading");
console.log(heading2);

//CREAR HTML CON CREATEELEMENT
const nuevoEnlace = document.createElement("A");

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";

//Agregar el texto
nuevoEnlace.textContent = "Un nuevo enlace";
//Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

//Agregarlo al Documento 
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);//appendChild es agregar al nuevo hijo o enlace.

console.log(nuevoEnlace);


//EVENTOS
console.log(1);

window.addEventListener("load", function(){//Load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener("DOMContentLoaded", function(){ //Solamente espera a que se descargue el HTML y no espera el CSS O IMAGENES
    console.log(4);
});

console.log(5);

window.onscroll = function() {
    console.log("scrolling..");
} 

//SELECCIONAR ELEMENTOS  Y ASOCIARLES UN EVENTO
/*const btnEnviar = document.querySelector(".boton--primario");

btnEnviar.addEventListener("click", function(evento){//El evento funciona para obtener informacion dele vento
    console.log(evento);
    evento.preventDefault();//Prevenimos que cada vez que demos click la pagina recarge

    //Validar formulario
  console.log("Enviar formulario");
});*/

//EVENTOS CON EL TECLADO

//Eventos de los Input t TextArea
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

//EVENTOS EN FORMULARIO

//El Evento en Submit
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

   //Validar el formulario

const { nombre, email, mensaje } = datos;
if(nombre == "" || email == "" || mensaje == ""){
   mostrarAlerta("Todos los campos son obligatorios", "error");

    return //Corta la ejecución del código y previene la ejecución del código
}
//Crear la otra alerta de Enviar Correctamente
mostrarAlerta("Mensaje Enviado Correctamente");

   //Enviar el formulario

   console.log("Enviando Formulario");

});

function leerTexto(evento){
    console.log("Estas escribiendo..");
    //console.log(evento.target.value);

datos[evento.target.id] = evento.target.value; //Leer toda la informacion

    

    console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");//Tenemos que crear el elemento 
alerta.textContent = mensaje; //Muestra el mensaje

if(error){
    alerta.classList.add("error");
}else {
    alerta.classList.add("enviado");  
}
formulario.appendChild(alerta);

//Desaparezca despues de 5 seg
setTimeout(() =>{
    alerta.remove();
    }, 5000);
    
}

    
    

        