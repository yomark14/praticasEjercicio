function hola() {
    console.log("Buenos dias");
    var cantidad1 = 100;
    var cantidad2 = 999;

    resultado = cantidad1 + cantidad2;
    return resultado;
}
console.log( hola()); 
/*RESUMEN
Las funciones son bloques de código que podemos ejecutar a discreción.

Las funciones se crean con function.

Siempre se deben invocar usando paréntesis. ej: hola().

Algunas funciones pueden devolver valores con return.

TODO: ACTIVIDAD

Crea una función que sume dos valores, ej: 500+500.
Muestra el resultado*/

function suma() {
    let a = 500;
    let b = 500;
    let resultado;
    resultado = a+b;
    return resultado
}

console.log("la función nos da como resultado la suma de: "+suma());