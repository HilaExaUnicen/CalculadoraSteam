"use strict"

document.addEventListener("DOMContentLoaded", function(e){

    document.querySelector("#boton").addEventListener("click", function(e){
        event.preventDefault();
    
        let inputPrecio = document.querySelector("#inputPrecio").value;
        let spanDOM = document.querySelector("#precioFinal");
        let provincia = document.querySelector("#selectProvincias").value;

    if(((inputPrecio > 0) && (inputPrecio < 50000))){
        
        //CONSEJO HIJO DE RE MIL PUTA PONE LOS BREAK EN LOS SWITCH

        switch(provincia){
            case "null":{
                alert("Ingrese su provincia");
                break;
            }
            case "Buenos Aires":{
                let multiplicadorImpuestos = 0.76;
                let nombreImpuestoProvincial = "ARBA RG 38/2019 2%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";
                
                break;
            }
            case "CABA":{
                let multiplicadorImpuestos = 0.76;
                let nombreImpuestoProvincial = "AGIP RG 312/2019 2%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            case "Cordoba":{
                let multiplicadorImpuestos = 0.77;
                let nombreImpuestoProvincial = "Rentas de Córdoba Decreto 774/2018 3%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            case "La Pampa":{
                let multiplicadorImpuestos = 0.75;
                let nombreImpuestoProvincial = "Rentas de La Pampa RG 14/2019 1% ";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            case "Rio Negro":{
                let multiplicadorImpuestos = 0.79;
                let nombreImpuestoProvincial = "Rentas de Río Negro RG 808/2020 5%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            case "Salta":{
                let multiplicadorImpuestos = 0.776;
                let nombreImpuestoProvincial = "Rentas de Salta RG 34/2018 3,6%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            case "Chaco":{
                let multiplicadorImpuestos = 0.795;
                let nombreImpuestoProvincial = "Rentas de Chaco RG 2046/2020 5,5%";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";

                break;
            }
            default:{
                let multiplicadorImpuestos = 0.74;
                let nombreImpuestoProvincial = "";
                sumaImpuestos(inputPrecio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial);
                document.querySelector("#inputPrecio").value = "";
                
                break;
            }
        }
    }
    else{
        alert("Ingrese un importe valido");
        document.querySelector("#inputPrecio").value = "";
    }
});

    function sumaImpuestos(precio, spanDOM, multiplicadorImpuestos, nombreImpuestoProvincial){

        let resultado = Number(precio)*multiplicadorImpuestos;

        document.querySelector("#precioInicial").innerHTML = precio;    
        spanDOM.innerHTML = parseFloat(precio) + parseFloat(resultado);
        detalleImpuestos(nombreImpuestoProvincial);

        if((precio == 69) || (precio == 420)){
            
            document.querySelector("#precioInicial").innerHTML = precio + " nice ";    
            spanDOM.innerHTML = parseFloat(precio) + parseFloat(resultado);
        }
        else if(precio == 420.69){
            document.querySelector("#precioInicial").innerHTML = precio + " ULTRANICE ";    
            spanDOM.innerHTML = parseFloat(precio) + parseFloat(resultado);
        }
    }

    function detalleImpuestos(nombreImpuestoProvincial){
        let detalleImpuestosDOM = document.querySelector("#detalleImpuestos");
        detalleImpuestosDOM.innerHTML = "";

        detalleImpuestosDOM.innerHTML +=   `<h4>Impuestos incluidos:</h4>
                                            <p>Impuesto pais 8%</p>
                                            <p>IVA 21%</p>
                                            <p>Resolución General AFIP 5232/2022 45%</p>
                                            <p>${nombreImpuestoProvincial}</p>`
    }
});

