'use strict'
let clase = ["Juan", "Pedro", "Manolo", "Julio", "Juana"];

for (let conteo = 0; conteo < clase.length; conteo++) {
    console.log( clase[conteo] );
}
/*RESUMEN
Los bucles son un tipo de condicional que puede repetir código dinámicamente.

El bucle for tiene tres partes: una condición inicial, la condición que se 
evalúa y un comando que se ejecuta al final de cada ciclo. Cada parte se 
separa por ";"

Para obtener los valores de un arreglo, generalmente se usan bucles.
TODO:
ACTIVIDAD
Crea un arreglo con 8 valores
Usa for para mostrar todos los valores.
Agrega mas valores a tu arreglo y muestra la lista actualizada.
*/
console.log("TOP PC GAMERS")
let topPcGamers = [ "MSI Meg Aegis Ti5", "Alienware Aurora R10", "Lenovo Legion Tower 5i", "Corsair One i300", "Acer Predator Orion 3000", "HP omen 30L", "CLX Scarab"]
for (let i = 0; i < topPcGamers.length; i++) {
    console.log (i+1+" "+ topPcGamers[i]);
}
console.log("xxxxxxxxxxxxxxxxxxxxxx");
console.log("Top PORTATILES GAMERS");
let topPortaGamers = ["Razer Blade 14", "Asus Rog Strix G15", "Lenovo Legion 5 Pro", "Asus Rog Zephyrus G14", "MSI Gs66 Stealth", "Acer Predator Triton 300 SE", "Asus Rog Flow X13", "HP Victus 16"];
for (let i = 0; i < topPortaGamers.length; i++) {
    console.log (i+1+" "+topPortaGamers[i]);
}