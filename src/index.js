import validator from './validator.js';

console.log(validator);
 
//Evento boton validar
 
const btnValidar = document.getElementById("btnValidar");
 
btnValidar.addEventListener("click", () => {

    document.getElementById("divInicio").className = "ocultarDiv"
    document.getElementById("divIngreseNumeroTarjeta").className = "ocultarDiv"
    document.getElementById("divSeleccioneTarjeta").className = "ocultarDiv"
    document.getElementById("divResultadoValido").className = "mostrarDiv"
    document.getElementById("divRegresar").className = "mostrarDiv"

});
 
//Evento boton regresar
const btnRegresar = document.getElementById("btnRegresar");
 
btnRegresar.addEventListener("click", () => {
    document.getElementById("divResultadoValido").className = "ocultarDiv"
    document.getElementById("divRegresar").className = "ocultarDiv"
    document.getElementById("divInicio").className = "mostrarDiv"
    document.getElementById("divIngreseNumeroTarjeta").className = "mostrarDiv"
    document.getElementById("divSeleccioneTarjeta").className = "mostrarDiv"
});

