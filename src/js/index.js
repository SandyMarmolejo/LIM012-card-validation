import validator from './validator.js';

const btnValidar = document.getElementById("btnValidar");
const btnBack = document.getElementById("btnBack");

btnValidar.addEventListener("click", () => {
    let numeroTarjeta = document.getElementById("txtNumeroTarjeta").value;

   
    if (numeroTarjeta === ''){
        document.getElementById('divFirstValidation').className = ""; 
    }
    else {
        document.getElementById('divFirstValidation').className = "hide"; 

        document.getElementById('divValidateCard').classList.add("hide");
        document.getElementById('divValidationResult').classList.remove("hide");
    
        document.getElementById("txtMaskedCardNumber").value = validator.maskify(numeroTarjeta);
    
        if (validator.isValid(numeroTarjeta)) {
            document.getElementById("lblValidCard").classList.remove("hide");
            document.getElementById("lblInvalidCard").classList.add("hide");
        }
        else {
            document.getElementById("lblValidCard").classList.add("hide");
            document.getElementById("lblInvalidCard").classList.remove("hide");
        }
    }
});

 btnBack.addEventListener("click", () => {
     document.getElementById('divValidateCard').classList.remove("hide");
     document.getElementById('divValidationResult').classList.add("hide");
});