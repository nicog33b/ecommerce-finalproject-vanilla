"use strict";

let puntaje=0;

let nroEstrellas= [`<span  class="fa fa-star checked"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span></p>`,
`<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span></p>`
,`<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star"></span>
<span  class="fa fa-star"></span></p>` 
,`<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star"></span></p>` 
,`<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span>
<span  class="fa fa-star checked"></span></p>` 
];



let star1=()=>{
    puntaje=1;
    document.getElementById("star1").className="fa fa-star checked"
    document.getElementById("star2").className="fa fa-star"
    document.getElementById("star3").className="fa fa-star"
    document.getElementById("star4").className="fa fa-star"
    document.getElementById("star5").className="fa fa-star"
}

let star2=()=>{
    puntaje=2;
    document.getElementById("star1").className="fa fa-star checked"
    document.getElementById("star2").className="fa fa-star checked" 
    document.getElementById("star3").className="fa fa-star"
    document.getElementById("star4").className="fa fa-star"
    document.getElementById("star5").className="fa fa-star"
}


let star3=()=>{
    puntaje=3;
    document.getElementById("star1").className="fa fa-star checked"
    document.getElementById("star2").className="fa fa-star checked"
    document.getElementById("star3").className="fa fa-star checked"
    document.getElementById("star4").className="fa fa-star"
    document.getElementById("star5").className="fa fa-star"
}


let star4=()=>{
    puntaje=4;
    document.getElementById("star1").className="fa fa-star checked"
    document.getElementById("star2").className="fa fa-star checked"
    document.getElementById("star3").className="fa fa-star checked"
    document.getElementById("star4").className="fa fa-star checked"
    document.getElementById("star5").className="fa fa-star"
}


let star5=()=>{
    puntaje=5
    document.getElementById("star1").className="fa fa-star checked"
    document.getElementById("star2").className="fa fa-star checked"
    document.getElementById("star3").className="fa fa-star checked"
    document.getElementById("star4").className="fa fa-star checked"
    document.getElementById("star5").className="fa fa-star checked"
}