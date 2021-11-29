"use strict";
let arrayCarrito = [];
let tipoMoneda = 0;
const premium = 15;
const express = 7
const standard = 5;
let nameBuy = undefined;
let dateBuy = undefined;
let cardBuy = undefined;
let cvvBuy = undefined;
let calleBuy = undefined;
let esquinaBuy = undefined;
let numberBuy = undefined;
let buttonMethodPay = document.getElementById("buttonMethodPay")
let completeToProcess=0;




function clearGroup(elem) {
  //si uno esta activado los demás estan desactivados.
  var group = document.getElementsByClassName("checkGroup1");
  for (var i = 0; i < group.length; i++) {
    if (group[i] != elem) {
      group[i].checked = false;
    }
  }
  //evita que los usuarios dejen desmarcadas todas las opciones de envio.
  for (var i = 0; i < group.length; i++) {
    if (group[i].checked != elem) {
      elem.checked = true;
    }
  }
}

let loadItemsSubtotal = () => {
  for (var i = 0; i < arrayCarrito.length; i++) {
    let carrito = arrayCarrito[i];
    var productActual = parseFloat(document.getElementById("producto" + [i]).value)

    let unitPrice = 0;
    if (carrito.currency === "USD") {
      unitPrice = carrito.unitCost
    } else if (carrito.currency = "UYU") {
      unitPrice = (carrito.unitCost / 40).toFixed(2);
    }
    document.getElementById("subtotal" + [i]).innerHTML = unitPrice * productActual + " USD";


  }
  let subtotal = 0;
  let envio = 0;
  for (var i = 0; i < arrayCarrito.length; i++) {

   let newSubtotal = parseFloat(document.getElementById("subtotal" + [i]).textContent);
   subtotal = subtotal + newSubtotal;
    document.getElementById("subtotal").innerHTML = "$" + subtotal + " USD";
    if (document.getElementById("standardEnvio").checked) {
      envio = (subtotal * standard) / 100
      document.getElementById("envio").innerHTML = envio + " USD";
    } else if (document.getElementById("expressEnvio").checked) {
      envio = (subtotal * express) / 100
      document.getElementById("envio").innerHTML = envio + " USD";
    } else if (document.getElementById("premiumEnvio").checked) {
      envio = (subtotal * premium) / 100;
      document.getElementById("envio").innerHTML = envio + " USD";
    }
    document.getElementById("total+iva").innerHTML = subtotal + envio + " USD";
    document.getElementById("total").innerHTML = subtotal + envio + " USD";
  }
}


let addItemToCart = () => {

  let numProd = 0;
  //Recorre el json con los productos del carrito y su información.
  let agregarAlCarrito = "";
  for (let i = 0; i < arrayCarrito.length; i++) {
    let carrito = arrayCarrito[i];


    //si esta en pesos uruguayos los transforma en dolares.
    let unitPrice = 0;
    if (carrito.currency === "USD") {
      unitPrice = carrito.unitCost
    } else if (carrito.currency = "UYU") {
      unitPrice = (carrito.unitCost / 40).toFixed(2);
    }


    agregarAlCarrito += `      
        <tr id="`+ "item" + numProd + `" >
        <td data-th="Product">
               <div class="row">
              <h5 class="nomargin">&nbsp;&nbsp;&nbsp;`+ carrito.name + `</h4>                   
            <div class="col-sm-10">
              <div class="col-sm-2 hidden-xs"><img src="`+ carrito.src + `" alt="..." class="img-responsive" width="200" ></div>
             </div>
          </div>
        </td>
        <div class="arregloTabla">
        <td class="text-center" data-th="Price">`+ unitPrice + " " + " USD" + `</td>
        <td data-th="Quantity">
          <input id="`+ "producto" + numProd + `" min="1" pattern="^[0-9]+" oninput="loadItemsSubtotal()" type="number" class="form-control text-center" value="1">
        </td>
        <td class="text-center" data-th"Delete">
        <button id="`+ "remove" + numProd + `" onclick="deleteItem(this) "class="btn btn-danger btn-sm rounded-0" type="button"  data-placement="top" title="Delete"><i class="fa fa-trash"></i>X</button>
        </td>
        <td id="`+ "subtotal" + numProd + `"  data-th="Subtotal" class="text-center">` + +`</td>
         </tr>
        </div>
        `



    document.getElementById("itemsDelCarrito").innerHTML = agregarAlCarrito;
    numProd += 1;

  }
}

let deleteItem = (b) => {
  //obtiene el id del boton que fue clickeado.
  //replace usando una expresion regular obtenemos el numero que corresponde al item del carrito.
let id=b.id.replace(/[^0-9]/g,'');

//Eliminamos el item seleccionado de html.
let idToDelete="item"+id;
let subtotalToDelete="subtotal"+id

//Elimina la seccion del item correspondiente a su id en el carrito.
document.getElementById(idToDelete).innerHTML="";
//Elimina por indice el elemento dentro del array.
arrayCarrito.splice(id,1)
//Vuelve a cargar los datos de los items.
addItemToCart()
loadItemsSubtotal()

//Arreglo por si se elimina el ultimo objeto en el array.
if(arrayCarrito.length===0){
  document.getElementById("total+iva").textContent="0"
  document.getElementById("subtotal").textContent="0"
  document.getElementById("envio").textContent="0"
  document.getElementById("total").textContent="0"
  
}
}

let saveUserPayDate = (e) =>{
//La funcion cumple la tarea de guardar la informacion sobre el metodo de pago del usuario.
nameBuy = document.getElementById("nameBuy").value
dateBuy = document.getElementById("dateBuy").value
cardBuy = document.getElementById("cardBuy").value 
cvvBuy = document.getElementById("cvvBuy").value
calleBuy = document.getElementById("calleBuy").value
esquinaBuy = document.getElementById("esquinaBuy").value
numberBuy = document.getElementById("numberBuy").value
}

let methodSuccessfull= () => {

if(arrayCarrito.length===0){
//evitar que se pueda procesar la compra sin items en el carrito.
}else{
if(nameBuy && dateBuy && cardBuy && cvvBuy && calleBuy && esquinaBuy && numberBuy != ""){
  buttonMethodPay.style.backgroundColor="#3d9e3a"
  document.getElementById("buttonCheckout").disabled=""
  completeToProcess=1;
}else{
  buttonMethodPay.style.backgroundColor="cornflowerblue";
  document.getElementById("buttonCheckout").disabled="true";
  completeToProcess=0;
}
}

}




let closeBuy=()=>{
  //Utilizado con el setTimeout en completeProcess()
  location.href = "main.html";
}

let completeProcess = () => {
  //Si la compra esta lista para ser procesada realizara la alerta correspondiente.
 if( completeToProcess===1) {
   document.getElementById("ventanaMainCart").innerHTML=`
   <div class="alert alert-success" role="alert">
¡Felicidades por realizar su compra correctamente!
</div>
 </div>`
 setTimeout(closeBuy,3000);
}
}



let loadCountrySelect = () => {
  var departamentos = ["Uruguay", "Chile", "Argentina", "Brasil", "Colombia", "Ecuador", "Estados unidos "]; //array de los departamentos.
  var select = document.getElementById("selectCountry"); //Seleccionamos el select

  for (var i = 0; i < departamentos.length; i++) {
    var option = document.createElement("option"); //Creamos la opcion
    option.innerHTML = departamentos[i]; //Metemos el texto en la opción
    select.appendChild(option); //Metemos la opción en el select
  }
}
 
document.addEventListener("DOMContentLoaded", function (e) {
 
  loadCountrySelect()

 document.getElementById("userBuy").value=username[0].usuario;
 document.getElementById("country").value= selectCountry.value;
 document.getElementById("price").value= parseFloat(total.textContent)

  getJSONData(CART_INFO2_URL).then(function (carrito) {
    if (carrito.status === "ok") {
      let buyCarInfo = carrito.data;
      arrayCarrito = carrito.data.articles;
      console.log(arrayCarrito)
      addItemToCart()
      loadItemsSubtotal()

      document.getElementById("buttonCheckout").addEventListener('click', function () {
        completeProcess()
      });
//obtener la informaciòn sobre el metodo de compra del usuario.
      document.getElementById("save").addEventListener('click', function () {
        saveUserPayDate()
        methodSuccessfull()     
      });

//Arreglo para evitar errores en los resultados.
      document.getElementById("premiumEnvio").addEventListener('click', function () {
        addItemToCart()
        loadItemsSubtotal()
     
      });
      document.getElementById("expressEnvio").addEventListener('click', function () {
        addItemToCart()
        loadItemsSubtotal()
     
      });
      document.getElementById("standardEnvio").addEventListener('click', function () {
        addItemToCart()
        loadItemsSubtotal()
   
      });



    }


  });
});