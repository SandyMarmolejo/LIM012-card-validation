const validator = {
  // ...
};

export default validator;

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
  
  //Solo si ocupa posicion impar se le multiplica x 2 al numero, los demas se mantienen
 
    for (i= 0; i <= lastPosition; i = i + 1 ) {
      if (i % 2 === 1){
        newArray[i] = (newArray[i]*2).toString();
      }
    }
 
//Sumar las cifras de los que son mayor igual a 10
    A[0]
      for(i=0; i <= lastPosition; i = i + 1){
          if (i.toString() >=10){
          newArray[0] = parseInt (newArray.toString()[0]) + parseInt (newArray.toString()[1]);
         }
      }
 
 
return newArray;
}
