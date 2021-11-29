"use strict";
"use strict";
let historial=[];




document.addEventListener("DOMContentLoaded", function (e) {

 console.log(historial)
  
    //nos obtiene los comentarios que han hecho los usuarios sobre el producto y sus datos.
    getJSONData("http://127.0.0.1:3020/payment").then(function (resultObj) {
        if (resultObj.status === "ok") {
            historial = resultObj.data;
          
        }

    });




});