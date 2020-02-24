import * as validator from './validator.js';

console.log(validator);

//Evento boton validar
const btnValidar = document.getElementById("btnValidar");

btnValidar.addEventListener("click", () => {
    let numeroTarjeta = document.getElementById("txtNumeroTarjeta").value;

    document.getElementById("divInicio").className = "ocultarDiv";
    document.getElementById("divIngreseNumeroTarjeta").className = "ocultarDiv";
    document.getElementById("divSeleccioneTarjeta").className = "ocultarDiv";
    
    document.getElementById("divRegresar").className = "mostrarDiv";

    if (validator.validarTarjeta(numeroTarjeta)) {
        document.getElementById("txtNumeroTarjetaEnmascarados").value = validator.maskify(numeroTarjeta);
        document.getElementById("divResultadoValido").className = "mostrarDiv";
    }
    else {
        document.getElementById("txtNumeroTarjetaEnmascarados").value = "";
        document.getElementById("divResultadoInvalido").className = "mostrarDiv";
   }
});

//Evento boton regresar
const btnRegresar = document.getElementById("btnRegresar");

btnRegresar.addEventListener("click", () => {
    document.getElementById("divResultadoValido").className = "ocultarDiv";
    document.getElementById("divResultadoInvalido").className = "ocultarDiv";
    document.getElementById("divRegresar").className = "ocultarDiv";

    document.getElementById("divInicio").className = "mostrarDiv";
    document.getElementById("divIngreseNumeroTarjeta").className = "mostrarDiv";
    document.getElementById("divSeleccioneTarjeta").className = "mostrarDiv";
});