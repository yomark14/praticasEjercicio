var prueba = "Hola"
function saludoIngles(){
    var prueba2 = "Hi"
}
console.log(prueba2);

var prueba = "Hola"
function saludoIngles(){
    prueba = "Hi"
}
saludoIngles();
console.log(prueba);
/*RESUMEN
Una variable creada dentro de una función, solo es accesible
dentro de ella. Este tipo de variables se llaman locales.

Las variables creadas fuera de una función, están disponibles
en cualquier parte del código, por eso se le llama globales.
TODO: ACTIVIDAD
Crea una variable global y modificala desde una función.
Escribe el resultado.*/

var transporte ="carro";
function cambioTransporte() {
    transporte = "avión";
}
cambioTransporte();
console.log(transporte);