"use strict";
let arrayFiltro=[]
let productoInfo=[]
let arrayProducto=[]

let llenarTitulo = () => { //rellena el titulo con el nombre del producto
    document.getElementById("nombreProducto").innerText = productoInfo.name;
}

let llenarImagenes = () => {
   let  contador=0;
    for (var i = 0; i < productoInfo.images.length; i++) {
        contador++;
            document.getElementById("imgProd"+contador).src = productoInfo.images[i]
   
}
}


let llenarDescripcion = () => {
    //Obtiene la descripcion del producto y rellena el campo destinado.
    document.getElementById("descripcion_producto").innerHTML = productoInfo.description;
}
//Se rellena cada uno de los espacios de la tabla con los datos que pertenecen a cada celda.
let llenarTablaDatosProducto = () => {
    document.getElementById("precioProducto").innerHTML = productoInfo.cost;
    document.getElementById("monedaProducto").innerHTML = productoInfo.currency;
    document.getElementById("disponibleProducto").innerHTML = productoInfo.soldCount;
    document.getElementById("categoriaProducto").innerHTML = productoInfo.category;

}

//Esta funcion recorre los comentarios sobre el producto y sus datos y invoca los comentarios 1x1 en su debido formato hmtl.
function mostrarListaComentarios(comment) {
    //
    //creo una variable que contendra en un string el contenido a agregar al html
    let agregarComentario = "";
    //el for recorre el array cada atributo antes de pasar al proximo indice del array obteniendo los datos necesarios
    //para rellenar los datos que nos interesan.-
    for (let i = 0; i < comment.length; i++) {
        let comentario = comment[i];
        agregarComentario += `
           
              <div class="container">
                <div class="row align-items-center justify-content-center">
                      <div class="col-26 col-md-8"> 
                        <p class="text-h1 mt-5 userRel"><strong> `+ comentario.user + `</strong>
                          `+ nroEstrellas[comentario.score - 1] + `
                    <p class="comentarioUsuario" >
                    `+ comentario.description + `
                    </p>
                 <p>`+ comentario.dateTime + `
                 </p>
                  </div>
                  `

        document.getElementById("cajaComentarios").innerHTML = agregarComentario;

    }
}

let agregarProductosRelacionados=()=>{
 
   let agregarImagen= "";
 //Esto es lo que se llama bucles anidados.
    for (let i = 0; i < arrayProducto.length;i++){
        for (let x = 0; x< arrayFiltro.length;x++){
        let imagen= arrayProducto[i];
        let filtro=arrayFiltro[x]
if(i===filtro){
      agregarImagen +=  ` 
      
      <a href="product-info.html"><img class="imgRelacionado" src="`+imagen.imgSrc+`" alt="`+imagen.name+`">
</a>

      `
   
     //contenedor de imagenes de los productos relacionados.
    document.getElementById("imagenesProductosRelacionados").innerHTML = agregarImagen;
    }
}

}

    }

    


let obtenerProductoActual= () => {
    var productoName= document.getElementById("nombreProducto").textContent;
        console.log("producto actual: "+productoName)
    }


document.addEventListener("DOMContentLoaded", function (e) {


    let formularioComentario = document.getElementById("submitComentario")
    formularioComentario.addEventListener("submit", function (evento) {
        /*Evita que la pagina se recargue automaticamente.*/
        evento.preventDefault();
        //obtiene el valor que el usuario texteo en la caja de comentario.
        var cajaDeComentarios = document.getElementById("textComentario").value;
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; 
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;
        
        //va contener el formato html de la caja de comentario con los datos del usuario + su comentario.
        let newComentario = "";
        newComentario += `
           
        <div class="container">
          <div class="row align-items-center justify-content-center">
                <div class="col-26 col-md-8"> 
                  <p class="text-h1 mt-5 userRel"><strong> `+ username[0].usuario + `</strong>
                    `+ nroEstrellas[puntaje - 1] + `
              <p class="comentarioUsuario" >
              `+ cajaDeComentarios + `
              </p>
              <p>
              `+ today + `
              </p>
                 </div>

            `
        //se agrega toda la información recolectado a la caja donde estan todos los comentarios.(+=)
        document.getElementById("cajaComentarios").innerHTML += newComentario;
        //Vacia la caja de texto para el proximo comentario.
        document.getElementById("textComentario").value = "";
        star1();
    });

    document.getElementById("star1").addEventListener("click", function () {
        //se invoca 
        star1();
    });

    document.getElementById("star2").addEventListener("click", function () {
        star2();
    });

    document.getElementById("star3").addEventListener("click", function () {
        star3();
    });

    document.getElementById("star4").addEventListener("click", function () {
        star4();
    });

    document.getElementById("star5").addEventListener("click", function () {
        star5();
    });

    
    //nos o41btiene los datos referidos al producto.
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
           productoInfo = resultObj.data;
  
            //rellenar el titulo del producto ref linea 1
            llenarTitulo();
            //rellenar las imagenes del producto ref linea 5
            llenarImagenes();
            //rellenar la descripción del producto ref linea 14
            llenarDescripcion();
            //mostrar aviso de stock y consultar al vendedor
            document.getElementById("avisoStock").innerHTML = "Hay " + productoInfo.soldCount + " Disponibles";
            //llenar los datos de la tabla de información del producto ref linea 19
            llenarTablaDatosProducto()
            //Recibe el nombre del producto actual y lo muestra en consola.
            obtenerProductoActual();
          //Guarda los numeros referentes al producto relacionado en la variable arrayFiltro global.
        arrayFiltro=productoInfo.relatedProducts        
        }


    });

    //nos obtiene los comentarios que han hecho los usuarios sobre el producto y sus datos.
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            let productoComentario = resultObj.data;
            mostrarListaComentarios(productoComentario);
        }

    });

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            hideSpinner();
           arrayProducto=resultObj.data;
           agregarProductosRelacionados()
           
          
           
        }
    });



});