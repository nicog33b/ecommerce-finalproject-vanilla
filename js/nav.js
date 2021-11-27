"use strict";
//obtiene usuario logeado
const userOn = document.getElementById("usuario");
//obtiene el boton que cierra la sesion.
const close = document.getElementById("cerrar");
//la variable username contiene un array con los datos de iniio de sesion del usuario.
let username= JSON.parse(localStorage.getItem('userConectado'));
//enlace principal
let enlace = document.getElementById("login-main");



  


if(username != null){
  
//Le agrega el nombre de usuario al droptown del nav.
 userOn.innerText=username[0].usuario;
 //El usuario logeado ya no puede volver a la ventana de login.
 enlace.href="main.html";

 }else{
    //redirije al index para poder logear o registrarse en el hipotetico caso que existiera registro.
    document.getElementById("usuario").addEventListener("click",function(){
      window.location.href="index.html";
    });
    
    //Cambia el texto del boton
  userOn.innerText="Inicia Sesion";

 //usuario no registrado no puede vender.
  document.getElementById("vendedorDesactivado").style.display="none";
       
   
    //no muestra las opciones cerrar sesion y carrito porque no esta logeado.
    document.getElementById("mostrarOcultar").style.display="none";
   
       enlace.href="index.html";
    
};
console.log("Bienvenido"+username[0].usuario);

document.getElementById("cerrar").addEventListener("click",function(){
    localStorage.removeItem("userConectado");
     });
