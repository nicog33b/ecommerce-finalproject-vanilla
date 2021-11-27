"use strict";
//cambios de password.
const newPass = document.getElementById("new_password");
const confirmPass = document.getElementById("confirm_password");
//datos para obtener la información del usuario
const nameP = document.getElementById("nameProfile");
const emailP = document.getElementById("emailProfile");
const ageP = document.getElementById("ageProfile");
const phoneP = document.getElementById("phoneProfile");
//información del usuario guardada y invocada desde el localStorage.






//codigo que sincroniza y armoniza las secciones del perfil del usuario.
$(document).ready(function () {
  var navItems = $('.admin-menu li > a');
  var navListItems = $('.admin-menu li');
  var allWells = $('.admin-content');
  var allWellsExceptFirst = $('.admin-content:not(:first)');
  allWellsExceptFirst.hide();
  navItems.click(function (e) {
    e.preventDefault();
    navListItems.removeClass('active');
    $(this).closest('li').addClass('active');
    allWells.hide();
    var target = $(this).attr('data-target-id');
    $('#' + target).show();
  });
});




//boton de cambiar contraseña (submit)
changePassword.addEventListener("submit", function (evento1) {

  /*Evita que la pagina se recargue automaticamente.*/
  evento1.preventDefault();
  //verifica si hay un usuario logeado.
  if (username != null) {
    //si la contraseña y la confirmación son iguales entonces
    if (newPass.value === confirmPass.value) {
      //obtengo el array de usuario desde nav.js y cambia por la nueva contraseña.
      username[0].pass = newPass.value
      //le pasa el nuevo array al localStorage
      localStorage.setItem('userConectado', JSON.stringify(username));
      //vacia los campos de cambio de contraseña.
      newPass.value = "";
      confirmPass.value = "";
    }
  } else {
    //envia al usuario sin logear al index para que
    window.location.href = "index.html";
  }
});


document.getElementById("saveChanges").addEventListener("click", function () {
  //verifica si hay un usuario logeado.
  if (username != null) {

    //Guarda los datos de cualquiera de las casillas modificadas.
    username[0].name = nameP.textContent;
    username[0].email = emailP.textContent;
    username[0].usuario = emailP.textContent;
    username[0].age = ageP.textContent;
    username[0].phone = phoneP.textContent;

    localStorage.setItem('userConectado', JSON.stringify(username));

  } else {

    //envia al usuario sin logear al index para que
    window.location.href = "index.html";

  }
});

let profileDate = () => {
  nameP.textContent = username[0].name;
  emailP.textContent = username[0].usuario;
  ageP.textContent = username[0].age;
  phoneP.textContent = username[0].phone;
}

let blockEnter = () => {

  nameP.addEventListener('keypress', (e) => {
    if (e.which === 13) e.preventDefault();
  });
  emailP.addEventListener('keypress', (e) => {
    if (e.which === 13) e.preventDefault();
  });

}

document.addEventListener("DOMContentLoaded", function (e) {
  //invoca la información del usuario.
  profileDate()
  //texto del boton guardar cambios.
  document.getElementById("saveChanges").value = "Guardar cambios"
//bloquea el boton enter en los formularios.
  blockEnter()


});