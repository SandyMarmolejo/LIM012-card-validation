const validator = {
    //
};

export default validator;


export const validarTarjeta = function (numeroTarjeta) {
    var arrayTarjeta = Array.from(numeroTarjeta)

    var esTarjetaValida = reverse(arrayTarjeta);
    return esTarjetaValida;

};

export const reverse = function (array) {

    const newArray = [];

    const size = array.length;

    const lastPosition = size - 1;

    for (let i = lastPosition; i >= 0; i--) {
        newArray.push(array[i]);
    }

    //Solo si ocupa posicion impar se le multiplica x 2 al numero, los demas se mantienen
    for (let i = 0; i <= lastPosition; i = i + 1) {
        if (i % 2 === 1) {
            newArray[i] = (newArray[i] * 2).toString();
        }
    }

    //Sumar las cifras de los que son mayor igual a 10
    let suma = 0;
    let esTarjetaValida = false;
    let cifraUno = 0;
    let cifraDos = 0;

    for (let i = 0; i <= lastPosition; i = i + 1) {
        if (parseInt(newArray[i]) >= 10) {
            cifraUno = parseInt(newArray[i][0])
            cifraDos = parseInt(newArray[i][1])
            newArray[i] = cifraUno + cifraDos;
        }
        newArray[i] = parseInt(newArray[i]);
        suma = suma + newArray[i];
    }
    if (suma % 10 == 0) {
        esTarjetaValida = true;
    }
    else {
        esTarjetaValida = false;
    }

    return esTarjetaValida;
};


export const maskify = function (numeroTarjeta) {

    if (numeroTarjeta.length <= 4) {
        return numeroTarjeta;
    }

    const numeroTarjetaMenosCuatroLetras = numeroTarjeta.slice(0, numeroTarjeta.length - 4);
    let arrayParaOcultarNumeros = [];
    const ultimosCuatroNumeros = numeroTarjeta.slice(-4);

    for (let i = 0; i < numeroTarjetaMenosCuatroLetras.length; i++) {
        arrayParaOcultarNumeros.push('#');
    }

    let arrayParaOcultarNumerosConcatenado = arrayParaOcultarNumeros.join('');

    return arrayParaOcultarNumerosConcatenado + ultimosCuatroNumeros;
};