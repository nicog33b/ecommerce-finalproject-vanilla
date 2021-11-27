"use strict";

function statusChangeCallback(response) {  
    console.log(response);                   
  if (response.status === 'connected') {  
    testAPI();  
  } else {                                 
    document.getElementById('status').innerHTML = 'Porfavor logeate ' +
      'en la pagina.';
  }
}


function checkLoginState() {               
  FB.getLoginStatus(function(response) {   
    statusChangeCallback(response);
    console.log(response)
  });
}


window.fbAsyncInit = function() {
  FB.init({
    appId      : '534968161160578',
    cookie     : true,                     
    xfbml      : true,                   
    version    : 'v11.0'          
  });


  FB.getLoginStatus(function(response) {    
    statusChangeCallback(response);
    console.log(response)       
  });
};

function testAPI() {                     
  console.log('Bienvenido.');
  FB.api('/me', function(response) {
    console.log('Acceso correcto: ' + response.name);
    document.getElementById('status').innerHTML =
      'Gracias por logearte ' + response.name + '!';
  });
}


 

  