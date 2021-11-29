"use strict";
//campos de cambio de imagen
let form1 = document.getElementById("newPhoto")
let form2 = document.getElementById("img_url")
let form3 = document.getElementById("indication")
//cambios de password.
const newPass = document.getElementById("new_password");
const confirmPass = document.getElementById("confirm_password");
//datos para obtener la información del usuario
const nameP = document.getElementById("nameProfile");
const emailP = document.getElementById("emailProfile");
const ageP = document.getElementById("ageProfile");
const phoneP = document.getElementById("phoneProfile");
let photoUser = document.getElementById("userPhoto");
let photo = document.getElementById("userPhoto").src
let photoAdd = document.getElementById("img_url")
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
// //hace inutil el enter para que el usuario no pueda hacer saltos de linea.
  nameP.addEventListener('keypress', (e) => {
    if (e.which === 13) e.preventDefault();
  });
  emailP.addEventListener('keypress', (e) => {
    if (e.which === 13) e.preventDefault();
  });

}

//evita bugs cuando se cargan urls erroneas.
function reemplaza_imagen(imagen) {
 
  imagen.src = "https://i.postimg.cc/HnGVqkgp/perfil-Vacio.png";
  username[0].photo_url="https://i.postimg.cc/KYphC3xT/cat7.jpg"
  return true;
}

document.addEventListener("DOMContentLoaded", function (e) {
  photoUser.src = username[0].photo_url;
  if (username[0].photo_url === "") {
    photoUser.src = "https://i.postimg.cc/HnGVqkgp/perfil-Vacio.png"
      //Agrega imagen del usuario desde el localStorage, si el usuario aun no ha elegido ninguna va por defecto.
  photoUser.src = username[0].photo_url;
  }  
  


  
  //invoca la información del usuario.
  profileDate()
  //texto del boton guardar cambios.
  document.getElementById("saveChanges").value = "Guardar cambios"
  //bloquea el boton enter en los formularios.
  blockEnter()

  document.getElementById("changePhoto").addEventListener('click', function () {
    //strings utilizados.
    let visible = "visible";
    let notVisible = "hidden"
    //si los form para cambiar la imagen estan visibles los hace invisibles.
    if (form1.style.visibility === visible && form2.style.visibility === visible && form3.style.visibility === visible) {
      form1.style.visibility = notVisible
      form2.style.visibility = notVisible
      form3.style.visibility = notVisible
    } else {
      //si no estan siendo visibles entonces los vuelve visibles.
      form1.style.visibility = visible
      form2.style.visibility = visible
      form3.style.visibility = visible
    }
 });

  document.getElementById("newPhoto").addEventListener('click', function () {
    
    //obtiene el url ingresado por el usuario para cambiar la foto.
    let newUrl = photoAdd.value;
    //se asegura de que el url y el host de la imagen sea el recomendado.
    if (newUrl.includes('https://i.postimg.cc/')){
      //cambia el url 
            username[0].photo_url = newUrl;
            //guarda el nuevo url en localStorage
    localStorage.setItem('userConectado', JSON.stringify(username));
    //cambia el src de la imagen para agregar la nueva imagen.

    photoUser.src = newUrl;
    }else{
      //Si el url no contiene "https://i.postimg.cc/" entonces vuelve a iniciar la foto por defecto.
      photoUser.src="https://i.postimg.cc/HnGVqkgp/perfil-Vacio.png"
      //cambia el url por el link de la imagen por defect.
      username[0].photo_url ="https://i.postimg.cc/HnGVqkgp/perfil-Vacio.png"
      //y lo guarda en localStorage.
      localStorage.setItem('userConectado', JSON.stringify(username));
      
    }


  });

});