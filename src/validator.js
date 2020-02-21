const validator = {
  // ...
};

export default validator;

 
const numeroTarjeta = "4556364607935616";
const reverse = function (array) {
 const newArray = [];
 const size = array.length;
 const lastPosition = size -1;
 for (let i = lastPosition; i>=0; i--){
   newArray.push(array[i]);
 }
 
let suma = 0;
let tarjeta = 0;
   for (i= 0; i <= lastPosition; i = i + 1 ) {
       if (i % 2 === 1){
       newArray[i] = (newArray[i]*2).toString();
       }
 
       if (parseInt(newArray[i])>=10) {
           cifraUno=parseInt(newArray[i][0])
           cifraDos=parseInt(newArray[i][1])
           newArray[i]= cifraUno + cifraDos;
       }
 
       newArray[i] = parseInt(newArray[i]);
 
       suma = suma + newArray[i];
   }
 
 
   if (suma % 10 == 0){
        tarjeta = true;
      }
      else {
        tarjeta = false;
      }
 
    return tarjeta;
   }

  
fuction ocultarDigitos 
