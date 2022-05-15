var semana = ["Lunes", "Martes", "Miercoles"]
console.log( semana.length) ;
//añadir valores al array
semana.push("Jueves" , "Viernes");
console.log( semana) ;
//eliminar el ultimo valor al array
semana.pop();
console.log( semana) ;
//posiciones en el array
var zoologico = ["Buffalo", "Antilope" , "Cabra"]
console.log(zoologico[0]);
//ordena alfabeticamente y ordena el array
zoologico.sort();
console.log(zoologico);
console.log(zoologico[0]);
//ordenado alfabeticamente a la inversa
zoologico.reverse();
console.log(zoologico)

//ejercicio

let amigos = ["Alberto", "Diego", "Pedro"]
console.log(amigos);
amigos.push( "Luis", "Manolo");
console.log("metodo push: " + amigos);
amigos.pop();
console.log("metodo pop: " + amigos);
amigos.sort();
console.log("metodo sort: " + amigos);
amigos.reverse();
console.log("metodo reverse: " + amigos);