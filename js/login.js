"use strict";
//Constantes.
const formularioUsuario = document.getElementById("formLogin");
const userLogin= document.getElementById("correo");
const contraseña = document.getElementById("contraseña");




formularioUsuario.addEventListener("submit", function (evento) {
  /*Evita que la pagina se recargue automaticamente.*/
  evento.preventDefault();

  //El array users va contener los datos ingresados del usuario.   
  let users = Array({
    usuario: userLogin.value,
    pass: contraseña.value,
    name:"",
    email:"",
    phone:"",
    photo_url:"https://i.ibb.co/ZXjSHK8/perfil-Vacio.png"
     });

  //Visualizar los datos del usuario ingresado.   
  console.log(users);
  localStorage.setItem('userConectado', JSON.stringify(users));
  location.href = "main.html";





});
document.addEventListener("DOMContentLoaded", function (e) {

});