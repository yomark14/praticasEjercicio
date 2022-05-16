var mensaje = [ "transaccion incorrecta verifica los datos",
"Monto es demasiado alto, pasa a nuestra sucursal",
"El 13 es de mala suerte, intenta otro valor"];

function convertirAyenes() {

    var tipoDeCambio = 99.2;
    var montoAcambiar = document.getElementById("dolares").value;

    resultado = montoAcambiar * tipoDeCambio;

    if(resultado <= 0){

        alert(mensaje[0]);

    }else if(resultado > 10000){
        alert(mensaje[1]);
    }else if(montoAcambiar == 13){
        alert(mensaje[2]);
    }else{
        alert(montoAcambiar + " dólares son " +resultado+ " Yenes ");
    }
}