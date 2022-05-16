'use strict'

function ConvertirYens(dolaresTotal, nombre) {
    
    //let dolaresTotal = 100;
    let resultado = dolaresTotal * 98.5;
    console.log(nombre + " TIENES ESTOS YENS: "+resultado);
}

ConvertirYens(1, "MANOLO");
/*RESUMEN
los parámetros sirven para recibir información en
una función.

Se pueden incluir multiples parámetros separándolos
por comas.

Al invocar una función incluimos los valores de los
parámetros

La información correspondiente a cada parámetro debe
ir en el mismo orden y separada por comas

TODO: ACTIVIDAD
Crea una función que use al menos dos parámetros
Muestra el resultado.*/

function controles(xboxSeries, ps5) {

    console.log("el control original de la xbox series tiene "+ xboxSeries + " botones.");
    console.log("el control de la ps5 tiene "+ ps5 + " botones");    
}
controles(14, 12);
