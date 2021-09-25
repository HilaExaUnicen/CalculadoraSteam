"use strict"

document.addEventListener("DOMContentLoaded", function(e){

    document.querySelector("#boton").addEventListener("click", function(e){
        event.preventDefault();
    
        let inputPrecio = document.querySelector("#inputPrecio").value;
        
        let spanDOM = document.querySelector("#precioFinal");

    if(inputPrecio > 0){
        sumaImpuestos(inputPrecio, spanDOM);

        document.querySelector("#inputPrecio").value = "";
    }

    else{
        alert("Ingrese un importe valido")
    }

});


    function sumaImpuestos(precio, spanDOM){

        let resultado = Number(precio)*0.66;

        document.querySelector("#precioInicial").innerHTML = precio;    
        spanDOM.innerHTML = parseFloat(precio) + parseFloat(resultado);

        if(((precio == 69) || (precio == 420))){
            
            document.querySelector("#precioInicial").innerHTML = precio + " nice ";    
            spanDOM.innerHTML = parseFloat(precio) + parseFloat(resultado);
        }

    }



});

