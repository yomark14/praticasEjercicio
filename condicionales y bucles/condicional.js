
'use strict'
/*
RESUMEN
Las condicionales crean estructuras logicas
Javascript tiene operadores especializados para comparar valores
if es una condicional que se ejecuta cuando hace una evaluacion valida
else if se activa si el primer if no realiza una evaluacion valida
else se activa si if o elfse if no realizan una evaluación válida.
*/

let mascotas = "perro";

if(mascotas == "perro"){

    console.log("guawww...");

}else if( mascotas == "gato"){

}else{
    console.log("no conozco tu mascota");
}
var edad = 18
if( edad == 18){
    console.log("Bienvenido a nuestro bar");
}else{
    console.log("No puedes entrar");
}
/* Ejercicio
Crea una condicional que se active solo cuando la variable
"puntaje" sea mayor o igual a 100.
Agrega un comando que se ejecute cuando el puntaje sea inferior a 100.
Prueba crear condicionales usando los nuevos operadores*/
var min = 90;
var max = 110;
var puntaje = min + Math.round(Math.random() * max);
if(puntaje >= 100){
    console.log("Perfecto entraste tu puntaje es", "tu puntaje es ", puntaje);
}else{
    console.log("Puntaje insuficiente vuelve a intentar sacar mas de 100", "tu puntaje es ", puntaje);
}
