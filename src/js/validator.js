const validator = {

    isValid: (array) => {

        const newArray = [];
        const size = array.length;
        const lastPosition = size - 1;

        for (let i = lastPosition; i >= 0; i--) {
            newArray.push(array[i]);
        }

        for (let i = 0; i <= lastPosition; i = i + 1) {
            if (i % 2 === 1) {
                newArray[i] = (newArray[i] * 2).toString();
            }
        }

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
    },

    maskify: (numeroTarjeta) => {
        let arrayParaOcultarNumeros = [];
      
        if (numeroTarjeta.length <= 4) {
            return numeroTarjeta;
        }

        const numeroTarjetaMenosCuatroLetras = numeroTarjeta.slice(0, numeroTarjeta.length - 4);
        const ultimosCuatroNumeros = numeroTarjeta.slice(-4);

        for (let i = 0; i < numeroTarjetaMenosCuatroLetras.length; i++) {
            arrayParaOcultarNumeros.push('#');
        }

        let arrayParaOcultarNumerosConcatenado = arrayParaOcultarNumeros.join('');

        return arrayParaOcultarNumerosConcatenado + ultimosCuatroNumeros;
    }
};

export default validator;